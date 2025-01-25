import products from "./product.js";
import cartproduct from "./cart.js";

    let allproducts = [
        {'pid':'p1','cat':'headphones','pname':'JBL Tune 760NC Wireless Over Ear Active Noise Cancellation Headphones with Mic','price':4499,'src':'./images/p1.png',},
        {'pid':'p2','cat':'headphones','pname':'boAt Rockerz 450','price':1499,'src':'./images/p2.png',},
        {'pid':'p3','cat':'headphones','pname':'Noise Airwave Max 4 Wireless Over-Ear Headphones','price':2499,'src':'./images/p3.png',},
        {'pid':'p4','cat':'headphones','pname':'Mivi DuoPods i2 True Wireless Earbuds','price':799,'src':'./images/p4.png',},
        {'pid':'p5','cat':'headphones','pname':'Boult Audio ZCharge Bluetooth Earphones','price':999,'src':'./images/p5.png',},
       
        {'pid':'p6','cat':'mobiles','pname':'Samsung Galaxy S23 Ultra 5G AI Smartphone','price':72999,'src':'./images/p6.png',},
        {'pid':'p7','cat':'mobiles','pname':'realme NARZO N61 ','price':8498,'src':'./images/p7.png',},
        {'pid':'p8','cat':'mobiles','pname':'Redmi A4 5G','price':8498,'src':'./images/p8.png',},
        {'pid':'p9','cat':'mobiles','pname':'iQOO Z9 Lite 5G','price':11499,'src':'./images/p9.png',},
        {'pid':'p10','cat':'mobiles','pname':'POCO C61 Ethereal Blue 4GB RAM 64GB ROM','price':5999,'src':'./images/p10.png',},
       
        {'pid':'p11','cat':'laptops','pname':'Dell Inspiron 3520 Laptop','price':45990,'src':'./images/p11.png',},
        {'pid':'p12','cat':'laptops','pname':'Samsung Galaxy Book4','price':59999,'src':'./images/p12.png',},
        {'pid':'p13','cat':'laptops','pname':'Lenovo ThinkPad 8th Gen Intel Core i5 Thin & Light HD Laptop','price':16950,'src':'./images/p13.png',},
        {'pid':'p14','cat':'laptops','pname':'Apple MacBook Air Laptop','price':56990,'src':'./images/p14.png',},
        {'pid':'p15','cat':'laptops','pname':'Acer Aspire 3 Laptop Intel Core Celeron N4500 Processor Laptop','price':21990,'src':'./images/p15.png',},
        
        {'pid':'p16','cat':'smartwatches','pname':'Redmi Watch 5','price':2799,'src':'./images/p16.png',},
        {'pid':'p17','cat':'smartwatches','pname':'Boult Newly Launched Crown Smart Watch','price':1399,'src':'./images/p17.png',},
        {'pid':'p18','cat':'smartwatches','pname':'Noise Pulse 2 Max','price':1399,'src':'./images/p18.png',},
    
        {'pid':'p19','cat':'tv','pname':'Panasonic 80 cm (32 inches) HD Ready Smart LED Google TV','price':14990,'src':'./images/p19.png',},
        {'pid':'p20','cat':'tv','pname':'Xiaomi Smart TV','price':12499,'src':'./images/p20.png',},
        {'pid':'p21','cat':'tv','pname':'Redmi Xiaomi 80 cm (32 inches) F Series HD Ready Smart LED Fire TV','price':11999,'src':'./images/p21.png',},
        {'pid':'p22','cat':'tv','pname':'LG 80 cm (32 inches) HD Ready Smart LED TV','price':13490,'src':'./images/p22.png',},
    ];

function addproductstoproduct(){
    for(var i=0;i<allproducts.length;i++){
        products.addproducttolist(allproducts[i]);
    }
}

function removeproductinproductlist(productid){
    products.removeproductinlist(productid);
}

function createhtmltodisplayproduct(){
    products.createhtmltodisplay();
}

function createhtmlcart(){
    cartproduct.createhtmltodisplaycart();
}
function getproducts(productid){
    return products.getproduct(productid)
}

function addproductstocart(product){
    cartproduct.addproduct(product);
}

function removeproductfromcart(productid){
    cartproduct.removeproduct(productid)
}

function productsearch(searchname){
    products.searchforproduct(searchname);
}

function switchdisplay(disname){
    let cartdis =document.getElementById("cart-dis");
    let onedis =document.getElementById("one-product-dis");
    let logindis =document.getElementById("login-dis");
    let orderdis = document.getElementById("order-dis");
    if(disname == "cartdis"){
        cartdis.style.display = "block";
        onedis.style.display = "none";
        logindis.style.display = "none";
        orderdis.style.display = "none";
    }else if(disname == "onedis"){
        cartdis.style.display = "none";
        onedis.style.display = "block";
        logindis.style.display = "none";
        orderdis.style.display = "none";
    }else if(disname == "logindis"){
        cartdis.style.display = "none";
        onedis.style.display = "none";
        logindis.style.display = "block";
        orderdis.style.display = "none";
    }else if(disname == "orderdis"){
        cartdis.style.display = "none";
        onedis.style.display = "none";
        logindis.style.display = "none";
        orderdis.style.display = "block";
    }
}
function menubuttondrop(){
    let menubtn = document.getElementById("menu-btn");
    menubtn.addEventListener('click',()=>{
        let drop = document.getElementById('drop-menu');
        if(drop.style.display == "block"){
            drop.style.display="none";
        }
        else{
            drop.style.display="block";
        }
    });
}

function clickonproduct(){
    let product=document.querySelectorAll(".product");
    let oneprodis = document.getElementById("one-product-dis");

    for(var i=0;i<product.length;i++){
        product[i].addEventListener('click',(event)=>{
            let ptd = getproducts(event.currentTarget.dataset.pid);
            
            let html=`
            <div class="back-btn" id="back-btn">back</div>
            <div class="one-pro" data-pid="${ptd.pid}">
                <div class="one-pro-img">
                    <img src="${ptd.src}">
                </div>
                <div class="one-pro-info">
                    <div class="one-pname">${ptd.pname}</div>
                    <div class="one-price">${"$"+ptd.price}</div>
                    <div class="addcart-btn" id="addcart-btn" data-pid="${ptd.pid}">Add To Cart</div>
                </div>
            </div>
            `;
            
            oneprodis.style.display = "block";
            oneprodis.innerHTML=html;
            let backbtn = document.getElementById("back-btn");
            backbtn.addEventListener('click',()=>{
                oneprodis.style.display = "none";
            });
            addcartbtnfunc();
            switchdisplay("onedis")
        });
    }
}
function addcartbtnfunc(){
    let addbtn = document.getElementById("addcart-btn");
    addbtn.addEventListener('click',(event)=>{
        let pta = getproducts(event.currentTarget.dataset.pid);
        addproductstocart(pta);
        cartproduct.printcartproducts();
    });
}
function cartbtnfunc(){
    let cartbtn = document.getElementById("cart-btn");
    let cartdis = document.getElementById("cart-dis");
    cartbtn.addEventListener('click',()=>{
        if(cartdis.style.display == "block"){
            cartdis.style.display="none"
        }
        else{
            cartdis.style.display="block";
        }
        createhtmlcart();
        switchdisplay("cartdis");
    });
}
function loginopenbtn(){
    let loginbtn = document.getElementById("login-btn");
    let logindis = document.getElementById("login-dis");
    loginbtn.addEventListener('click',()=>{
        logindis.style.display="block";
        switchdisplay("logindis");
    });
}

function orderopenbtn(){
    let orderdbtn = document.getElementById("order-d-btn");
    let orderdis =document.getElementById("order-dis");
    orderdbtn.addEventListener('click',()=>{
        orderdis.style.display = "block";
        switchdisplay("orderdis");
    });
}

function loginbackbtn(){
    let backbtn = document.getElementById("login-back-btn");
    let logindis = document.getElementById("login-dis");
    backbtn.addEventListener('click',()=>{
        logindis.style.display="none";
    })
}

function switchloginregisterbtn(){
    let tosign = document.getElementById("to-signin");
    let toreg = document.getElementById("to-reg");
    let registerdis = document.getElementById("register-dis");
    let signindis = document.getElementById("signin-dis");
    tosign.addEventListener('click',()=>{
        registerdis.style.display = "none";
        signindis.style.display="block";
    })
    toreg.addEventListener('click',()=>{
        registerdis.style.display = "block";
        signindis.style.display="none";
    })
}
function searchboxfunc(){
    let searchbox =document.getElementById("search-box");
    searchbox.addEventListener('keydown',(event)=>{
        if(event.key == "Enter"){
            productsearch(event.target.value);
        }
        clickonproduct();
    });
}

function loginregisterfunc(){
    let loginbtn = document.getElementById("sign-in-btn");
    let regbtn = document.getElementById("reg-btn");

    loginbtn.addEventListener('click',()=>{
        let l_username = document.getElementById("");
        let l_password = document.getElementById("");

        let data = {
            'username':l_username,
            'password':l_password
        }
        let senddata = async ()=>{
            fetch("address",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            }).then((data)=>{
                console.log("success",data);
            }).catch(error=>{
                console.log("Error",error);
            })
        }
        senddata();

    });
    regbtn.addEventListener('click',()=>{
        let r_username = document.getElementById("");
        let r_password = document.getElementById("");
        let r_reusername = document.getElementById("");
        let redata = {
            'username':r_username,
            'password':r_password
        }
        if(r_password != r_reusername){
            alert("create password and renter password are not same");
        }else{
            let senddata = async ()=>{
                fetch("address",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(redata)
                }).then((data)=>{
                    console.log("success",data);
                }).catch(error=>{
                    console.log("Error",error);
                })
            }
            senddata();
        }
    })
}

function startadver(){
    products.startad();
}


function buttons(){
    searchboxfunc();
    menubuttondrop();
    clickonproduct();
    cartbtnfunc();
    loginopenbtn();
    loginbackbtn();
    orderopenbtn();
    switchloginregisterbtn();
}

function defaultrun(){
    loginregisterfunc();
    addproductstoproduct();
    startadver();
    createhtmltodisplayproduct();
    buttons();
}

defaultrun();