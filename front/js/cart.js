
class Cart{
    cartproducts = [];
    orders = [];
    addproduct(product){
        this.cartproducts.push(product);
        alert("product add to cart")
        this.createhtmltodisplaycart();
    }

    removeproduct(productid){
        for(var i=0;i<this.cartproducts.length;i++){
            if(this.cartproducts[i].pid == productid ){
                this.cartproducts.splice(i,1);
                this.createhtmltodisplaycart();
            }
        }
    }

    printcartproducts(){
        console.log(this.cartproducts);
    }

    createhtmltodisplaycart(){
        let cartdis = document.getElementById("cart-dis");
        let total_amount = 0;
        let html = ``;
        for(var i=0;i<this.cartproducts.length;i++){
            html += `
            <div class="cart-product" data-pid="${this.cartproducts[i].pid}">
                <div class="cart-pro-img">
                    <img src=${this.cartproducts[i].src}>
                </div>
                <div class="cart-pro-info">
                    <div class="cart-pname">${this.cartproducts[i].pname}</div>
                    <div class="cart-pro-price">${"$"+this.cartproducts[i].price}</div>
                </div>
                <div class="remove-btn" id="remove-${this.cartproducts[i].pid}" data-pid="${this.cartproducts[i].pid}">Remove</div>
            </div>
            `;

            total_amount +=this.cartproducts[i].price;
        }
        html = `<div class="cart-back-btn" id="cart-back-btn">back</div>`+html
        html+=`
        <div class="total-am">Total:${"$"+total_amount}</div>
        <div class="p-order-btn" id="p-order-btn">Place order</div>
        `
        cartdis.innerHTML=html;
        this.applyremovebtn();
        let backbtn = document.getElementById("cart-back-btn");
        backbtn.addEventListener('click',()=>{
            cartdis.style.display="none";
        });
        let placebtn = document.getElementById("p-order-btn");
        placebtn.addEventListener('click',()=>{
        this.addorderandhtml();
        alert("Order placed");
    })
    }
    applyremovebtn(){
        for(var i=0;i<this.cartproducts.length;i++){
            let removebtn = document.getElementById("remove-"+this.cartproducts[i].pid);
            removebtn.addEventListener('click',(event)=>{
                this.removeproduct(event.currentTarget.dataset.pid);
            });
        }
    }

    removeorder(){
        this.orders = [];
        alert("orders removed");
        this.addorderandhtml();
    }

    addorderandhtml(){
        console.log(this.cartproducts);
        let orderdis = document.getElementById("order-dis");
        let totalam = 0;
        let html = `
        <div class="order-back-btn" id="order-back-btn">back</div>
        <div class="order-title">Orders</div>`
        for(var i=0;i<this.cartproducts.length;i++){
            totalam+=this.cartproducts[i].price;
            html+=`
            <div class="o-pro" id="o-pro" data-pid="${this.cartproducts[i].pid}">
                <div class="o-pname">${this.cartproducts[i].pname}</div>
                <div class="o-price">${"$"+this.cartproducts[i].price}</div>
            </div>`
        }
        html +=`
        <div class="total-am">total $ ${totalam}</div>
        <div class="remove-o-btn" id="remove-o-btn">Remove</div>
        `
        orderdis.innerHTML =html;
        this.cartproducts = [];
        this.createhtmltodisplaycart();
        
        let orderbackbtn = document.getElementById("order-back-btn");
        orderbackbtn.addEventListener('click',()=>{
            orderdis.style.display="none";
        });
        let orderremovebtn = document.getElementById("remove-o-btn");
        orderremovebtn.addEventListener('click',()=>{
            this.removeorder();
        });
    }
}

let cartproduct = new Cart();
export default cartproduct;