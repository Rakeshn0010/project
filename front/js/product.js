class Products{
    products ={};
    category = ()=>{
        var arr = [];
        for(var i in this.products){
            arr.push(i);
        }
        return arr
    }

    checkcategory(cat){
        for(var i=0;i<this.category().length;i++){
            if(this.category()[i] == cat){
                return true;
            }
        }
        return false;
    }

    addproducttolist(product){
        if(this.checkcategory(product.cat)){
            this.products[product.cat].push(product);
        }
        else{
            this.products[product.cat] = [];
            this.products[product.cat].push(product);
        }
    }

    removeproductinlist(productid){
        for(var p in this.products){
            for(var i=0;i<this.products[p].length;i++){
                if(this.products[p][i].pid == productid){
                    this.products[p].pop(i);
                }
            }
        }
    }

    
    getproduct(productid){
        for(var p in this.products){
            for(var i=0;i<this.products[p].length;i++){
                if(this.products[p][i].pid == productid){
                    return this.products[p][i];
                }
            }
        }
    }
    
    createhtmltodisplay(){
        let all=``;
        let prodis = document.getElementById("product-dis");
        for(var p in this.products){
            let outer=`<div class="pro-cat">${p}</div>
            <div class="product-column row">`;

            let inner=``;

            for(var i =0;i<this.products[p].length;i++){
                inner += 
                `<div class="product col-5.5" data-pid="${this.products[p][i].pid}" id="product">
                    <div class="product-img">
                        <img src="${this.products[p][i].src}">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${this.products[p][i].pname}</div>
                        <div class="price">${"$"+this.products[p][i].price}</div>
                    </div>
                </div>
                `
            }
            all+=outer+inner+`</div>`
        }
        prodis.innerHTML=all;
    }

    searchforproduct(searchname){
        let result = [];
        let incat = false;
        let name = searchname.toLowerCase();
        for(var pro in this.products){
            if(name.includes(pro.toLowerCase())){
                for(var i =0;i<this.products[pro].length;i++){
                    result.push(this.products[pro][i]);
                }
                incat = true;
            }
        }
        for(var pro in this.products){
            for(var i=0;i<this.products[pro].length;i++){
                if((this.products[pro][i].pname.toLowerCase()).includes(name)){
                    console.log(this.products[pro][i]);
                    result.push(this.products[pro][i]);
                }
            }
        }
        this.createsearchpage(result)
    }

    createsearchpage(result){
        let productdis = document.getElementById("product-dis");
        let html = ``;
        let outer =`
        <div class="product-column row">
        `;
        for(var i=0;i<result.length;i++){
            html+=`
            <div class="product col-5.5" data-pid="${result[i].pid}" id="product">
                    <div class="product-img">
                        <img src="${result[i].src}">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${result[i].pname}</div>
                        <div class="price">${"$"+result[i].price}</div>
                    </div>
                </div>
            `;
        }
        outer = outer+html+`</div>`;

        productdis.innerHTML = outer;
    }

    createhtmlad(a){
        let addis = document.getElementById("addver-dis");
        let html =`
        <div class="adpro" id="adpro" data-pid=${a.pid}>
            <div class="ad-img"><img src="${a.src}"></div>
            <div class="ad-pname">${a.pname}</div>
        </div>
        `;
        addis.innerHTML = html;

    }

    startad(){
        let a = ["p1","p6","p11"];
        let count = 0;
        setInterval(()=>{
            if(count >2){
                count = 0;
            }
            this.createhtmlad(this.getproduct(a[count]));
            count++;
        },3000)

    }

    printproduct(){
        console.log(this.products);
    }
}

var products = new Products();
export default products;