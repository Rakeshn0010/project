import allproducts from "./product.js";


let productsdata = [
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
//products functions

function addproductstoallproducts(product){
    allproducts.addproduct(product);
}

function addingexampleproducts(){

    for(var i=0;i<productsdata.length;i++){
        addproductstoallproducts(productsdata[i]);
    }
}


function arrayproductsdisplay(){
    let products = [];
    for(var i=0;i<productsdata.length;i++){
        if(productsdata[i].cat == "mobiles"){
            products.push(productsdata[i]);
        }
    }
    allproducts.createarraydisplay(productsdata);
}


function displayallcategoriesproduct(){
    allproducts.displaycategories();
}

export function showmessage(message){
    let medis = document.getElementById("message-box");
    medis.innerText=message;
    medis.style.display="block";
    setTimeout(()=>{
        medis.style.display="none";
    },2000);
}


function loginandregisterfunc(){
    let loginbtn = document.getElementById("sign-in-btn");
    let regbtn = document.getElementById("reg-btn");

    loginbtn.addEventListener('click',()=>{
        let l_username = document.getElementById("");
        let l_password = document.getElementById("");

        let data = {
            'username':l_username,
            'password':l_password
        }

        async function loginuser(data){
            const response = await fetch('http://127.0.0.1:5000/login',{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify(data)
            });
            const rdata = await response.json();
            showmessage(rdata.res)
        }
        loginuser(data);
    });
    regbtn.addEventListener('click',()=>{
        let r_username = document.getElementById("");
        let r_password = document.getElementById("");
        let r_repass = document.getElementById("");

        if(r_password != r_repass){
            alert("create password and renter password are not same");
        }else{
            let redata = {
                'username':r_username,
                'password':r_password
            }

            async function registeruser(redata){
                const response = await fetch('http://127.0.0.1:5000/register',{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(redata),
                });
                const rdata = await response.json();
                showmessage(rdata.res);
            }
        }
    });
}









//button and click functions
function menubtnopenclose(){
    let menubtn =document.getElementById("menu-btn");
    let menudrop = document.getElementById("menu-drop");
    menubtn.addEventListener('click',()=>{
        if(menudrop.style.display == "none"){
            menudrop.style.display = "block";
        }
        else{
            menudrop.style.display = "none";
        }
    });
}

function loginregdisopenclosebtn(){
    let loginpop = document.getElementById("login-pop-btn");
    let logindis = document.getElementById("login-reg-dis");
    let backbtn = document.getElementById("login-back-btn");
    loginpop.addEventListener('click',()=>{
        logindis.style.display="block";
    });
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



function cartorderopenclosefunc(){
    let cartn = document.getElementById("cart-name");
    let ordern = document.getElementById("order-name");
    let cartdis=document.getElementById("cart-dis");
    let orderdis = document.getElementById("order-dis");
    let cartoc = document.getElementById("cart-oc");
    let orderoc = document.getElementById("order-oc");

    cartn.addEventListener('click',()=>{
        if(cartdis.style.display == "none"){
            cartdis.style.display = "block";
            cartoc.innerText = "-";
        }
        else{
            cartdis.style.display = "none";
            cartoc.innerText = "+";
        }
    });
    ordern.addEventListener('click',()=>{
        if(orderdis.style.display == "none"){
            orderdis.style.display = "block";
            orderoc.innerText="-";
        }
        else{
            orderdis.style.display = "none";
            orderoc.innerText="+";
        }
    });

}

function searchbarfunc(){
    let searchbar = document.getElementById("search-for-pro");
    let prodis = document.getElementById("all-pro-dis");
    searchbar.addEventListener('keydown',(event)=>{
        if(event.key == "Enter"){
            if(searchbar.value.length >0){
                allproducts.searchandgetfunc(searchbar.value);
                prodis.scrollIntoView();
            }else{
                showmessage("Search bar is empty");
            }
        }
    });
}

function naviagtionbtnfunc(){
    let probtn = document.getElementById("product-icon");
    let cartbtn = document.getElementById("cart-icon");
    let orderbtn = document.getElementById("order-icon");
    let goupbtn = document.getElementById("goup-icon");

    let prodis = document.getElementById("all-pro-dis");
    let cartn = document.getElementById("cart-name");
    let ordern = document.getElementById("order-name");
    let top = document.getElementById("top-bar");

    let cartdis =document.getElementById("cart-dis");
    let orderdis =document.getElementById("order-dis");

    probtn.addEventListener('click',()=>{
        prodis.scrollIntoView();
    });
    cartbtn.addEventListener('click',()=>{
        cartn.scrollIntoView();
        cartdis.style.display="block";
    });
    orderbtn.addEventListener('click',()=>{
        ordern.scrollIntoView();
        orderdis.style.display="block";
    });
    goupbtn.addEventListener('click',()=>{
        top.scrollIntoView();
    });
}

function icontextappearfunc(){

    let proicon = document.getElementById("product-icon");
    let carticon = document.getElementById("cart-icon");
    let ordericon = document.getElementById("order-icon");
    
    let protx = document.getElementById("pro-text");
    let carttx = document.getElementById("cart-text");
    let ordertx = document.getElementById("order-text");

    proicon.addEventListener('mouseenter',()=>{
        protx.style.display="block";
    });
    carticon.addEventListener('mouseenter',()=>{
        carttx.style.display="block";
    });
    ordericon.addEventListener('mouseenter',()=>{
        ordertx.style.display="block";
    });
    proicon.addEventListener('mouseleave',()=>{
        protx.style.display="none";
    });
    carticon.addEventListener('mouseleave',()=>{
        carttx.style.display="none";
    });
    ordericon.addEventListener('mouseleave',()=>{
        ordertx.style.display="none";
    });
}

window.leftclickbtnfunc =function (){
    allproducts.onleftclick();
}
window.rightclickbtnfunc =function (){
    allproducts.onrightclick();
}


//sub-main-func
function forbuttons(){
    menubtnopenclose();
    cartorderopenclosefunc();
    loginregdisopenclosebtn();
    switchloginregisterbtn();
    searchbarfunc();
    naviagtionbtnfunc();
    icontextappearfunc();
}

function forproducts(){
    addingexampleproducts();
    arrayproductsdisplay();
    displayallcategoriesproduct();
    loginandregisterfunc();
}

//default function
function defaultfunc(){
    forproducts();
    forbuttons();
}

defaultfunc()
