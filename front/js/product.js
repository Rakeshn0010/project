import cartproduct from "./cartandorder.js";
import { showmessage } from "./index.js";
class Product{

    allproducts = {};
    displayproducts = [];
    currentproindex=0;

    category = ()=>{ 
        let arr=[];
        for(var i in this.allproducts){
            arr.push(i);
        }
        return arr;
    }

    addproduct(product){
        if(this.category().includes(product.cat)){
            this.allproducts[product.cat].push(product);
        }
        else{
            this.allproducts[product.cat] = [];
            this.allproducts[product.cat].push(product);
        }
    }

    getproduct(productid){
        for(var i in this.allproducts){
            for(var index =0;index<this.allproducts[i].length;index++){
                if(this.allproducts[i][index].pid == productid){
                    return this.allproducts[i][index]
                }
            }
        }
    }

    searchandgetfunc(searchname){
        let result = [];
        let incat = false;
        let name = searchname.toLowerCase();
        for(var pro in this.allproducts){
            if(name.includes(pro.toLowerCase())){
                for(var i =0;i<this.allproducts[pro].length;i++){
                    result.push(this.allproducts[pro][i]);
                }
                incat = true;
            }
        }
        for(var pro in this.allproducts){
            for(var i=0;i<this.allproducts[pro].length;i++){
                if((this.allproducts[pro][i].pname.toLowerCase()).includes(name)){
                    console.log(this.allproducts[pro][i]);
                    result.push(this.allproducts[pro][i]);
                }
            }
        }
        if(result.length >0){
            this.createarraydisplay(result);
        }
        else{
            showmessage("No Product found for:"+searchname);
        }
    }

    changecurrentproindex(productid){
        for(var i=0;i<this.displayproducts.length;i++){
            if(this.displayproducts[i].pid == productid){
                this.currentproindex = i;
            }
        }
    }
    onrightclick(){
        if(this.currentproindex < this.displayproducts.length-1){
            this.displayoneproduct(this.displayproducts[this.currentproindex + 1]);
        }
    }

    onleftclick(){
        if(this.currentproindex > 0){
            this.displayoneproduct(this.displayproducts[this.currentproindex - 1]);
            console.log(this.displayproducts[this.currentproindex -1]);
       
        }
    }


    productclickfunc(){
        let oneprodis = document.getElementById("one-pro");
        let products = document.querySelectorAll(".product");
        products.forEach((pro)=>{
            pro.addEventListener('click',(event)=>{
                this.displayoneproduct(this.getproduct(event.currentTarget.dataset.pid))
                this.changecurrentproindex(event.currentTarget.dataset.pid);
                oneprodis.scrollIntoView({'behavior':"smooth"})
            })
        })
    }

    createarraydisplay(products){
        this.displayproducts = [];
        products.forEach((pro)=>{this.displayproducts.push(pro)});
        
        let allproductsdis = document.getElementById("all-pro-dis");
        let html=`
        <div style="font-weight:bold">products searched for:</div>
        <div class="row">
        `;

        for(var i=0;i<products.length;i++){
            html+=`
            <div class="product" data-pid="${products[i].pid}">
                <div class="pro-img">
                    <img src="${products[i].src}">
                </div>
                <div class="pro-info">
                    <div class="pro-pname">${products[i].pname}</div>
                </div>
            </div>
            `
        }
        allproductsdis.innerHTML = html+`</div>`
        this.productclickfunc();
    }

    displayoneproduct(product){
        console.log(product);
        let oneprodis = document.getElementById("one-pro");
        let html = `
        <div class="one-product">
            <div class="one-pimg"><img src="${product.src}"></div>
            <div class="one-pname">${product.pname}</div>
            <div class="one-price">$${product.price}</div>
            <div class="addtocart-btn" id="addtocart-btn" data-pid="${product.pid}">Add To Cart</div>
        </div>
        `;
        oneprodis.innerHTML=html;
        this.changecurrentproindex(product.pid);

        let addcartbtn = document.getElementById("addtocart-btn");
        addcartbtn.addEventListener('click',(event)=>{
            cartproduct.addproductstocart(this.getproduct(event.currentTarget.dataset.pid));
        })
    }

    clickcategoryfunc(){
        let cat = document.querySelectorAll(".categories");
        let prodis = document.getElementById("all-pro-dis");
        cat.forEach((c)=>{
            c.addEventListener('click',(event)=>{
                this.searchandgetfunc(event.currentTarget.dataset.cate);
                prodis.scrollIntoView();
            })
        });
    }

    displaycategories(){
        let catdis = document.getElementById("category-dis");
        let html=`
        <div style="font-weight:bold">Categories:</div>
        `;
        for(var i=0;i<this.category().length;i++){
            html +=`
            <div class="categories" data-cate="${this.category()[i]}">${this.category()[i]}</div>
            `;
        }
        catdis.innerHTML=html;
        this.clickcategoryfunc();

    }


    printproduct(){
            console.log(this.allproducts);
        }
}

let allproducts = new Product();
export default allproducts;