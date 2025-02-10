import { showmessage } from "./index.js";

class Cart{
    cartproducts = [];
    orders = [];
    ordercount = 0;

    addproductstocart(product){
        this.cartproducts.push(product);
        this.displaycartproductdisplay();
        showmessage("Product added to cart");
    }

    removeproductfromcart(productid){
        for(var i=0;i<this.cartproducts.length;i++){
            if(this.cartproducts[i].pid == productid){
                this.cartproducts.splice(i,1);
                this.displaycartproductdisplay();
                showmessage("Product removed from cart");
            }
        }
    }

    removeallfromcart(){
        this.cartproducts=[];
        this.displaycartproductdisplay();
    }

    placeproductorder(){
        this.ordercount+=1;
        let orderid = "#order"+this.ordercount;
        this.orders.push([orderid,this.cartproducts]);
        this.removeallfromcart();
        this.displayorders();
        showmessage("order placed");
    }
    
    removeorder(orderid){
        for(var i=0;i<this.orders.length;i++){
            if(this.orders[i][0] == orderid){
                this.orders.splice(i,1);
                this.ordercount-=1;
            }
        }
        this.displayorders();
        showmessage("order removed");
    }

    displaycartproductdisplay(){
        let cartdis = document.getElementById("cart-dis");
        let html=``;
        let totalamount = 0;
        if(this.cartproducts.length>0){
            for(var i=0;i<this.cartproducts.length;i++){
                html += `
                <div class="cart-product" data-pid="${this.cartproducts[i].pid}">
                    <div class="cart-pro-info">
                        <div class="cart-pimg"><img src="${this.cartproducts[i].src}"></div>
                        <div class="cart-pname">${this.cartproducts[i].pname}</div>
                        <div class="cart-pprice">$${this.cartproducts[i].price}</div>
                    </div>
                    <div class="cart-remove-btn" data-pid="${this.cartproducts[i].pid}">Remove</div>
                
                </div>
                `;
                totalamount+=this.cartproducts[i].price;
            }
            html+=`
            <div class="cart-details">
                <div class="t-amount">Total Amount : $${totalamount}</div>
                <div class="placeorder-btn" id="placeorder-btn">Place order</div>
            </div>
            `;
            cartdis.innerHTML=html;

            let removebtns = document.querySelectorAll('.cart-remove-btn');
            removebtns.forEach((btn)=>{
                btn.addEventListener('click',(event)=>{
                    this.removeproductfromcart(event.currentTarget.dataset.pid);
                })
            });

            let placeorderbtn = document.getElementById("placeorder-btn");
            placeorderbtn.addEventListener('click',()=>{
                this.placeproductorder();
            });
        }else{
            cartdis.innerHTML="No products in cart";
        }
    }

    displayorders(){
        let orderdis = document.getElementById("order-dis");
        let html = ``;
        
        if(this.orders.length>0){
            for(var i=0;i<this.orders.length;i++){
                html +=`
                <div class="orders">
                <div class="order-id">${this.orders[i][0]}</div>
                <ul class="pro-list">
                `
                let total=0;
                for(var j=0;j<this.orders[i][1].length;j++){
                    html+=`
                        <li>${this.orders[i][1][j].pname}</li>
                    `
                    total+=this.orders[i][1][j].price;
                }
                html+=`
                </ul>
                <div class="order-price">Amount :$${total}</div>
                <div class="order-remove-btn" id="order-remove-btn" data-oid="${this.orders[i][0]}">Remove</div>
                </div>
                `
            }
            orderdis.innerHTML = html;

            let removebtn = document.querySelectorAll(".order-remove-btn");
            removebtn.forEach((btn)=>{
                btn.addEventListener('click',(event)=>{
                    this.removeorder(event.currentTarget.dataset.oid);
                })
            });
        }else{
            orderdis.innerHTML="No orders placed";
        }
    }
}
let cartproduct = new Cart();
export default cartproduct; 