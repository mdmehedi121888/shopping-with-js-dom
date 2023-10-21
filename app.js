let cnt=0;
let totalProductsPrice=0;
document.getElementById('coffee-btn').addEventListener('click',function(event){
    
    getData(event);
    
})
document.getElementById('heart-btn').addEventListener('click',function(event){
    
    getData(event);
    
})
document.getElementById('panda-btn').addEventListener('click',function(event){
    
    getData(event);
    
})
document.getElementById('umbrella-btn').addEventListener('click',function(event){
    
    getData(event);
    
})
document.getElementById('vue-btn').addEventListener('click',function(event){
    
    getData(event);
    
})
document.getElementById('laptop-btn').addEventListener('click',function(event){

    getData(event);
    
})
function getData(event){
    const title = event.target.parentNode.parentNode.children[0].innerText;
    const price = event.target.parentNode.parentNode.children[1].children[0].innerText;
    const quantity = event.target.parentNode.parentNode.children[2].value;
    // clear the input field after get value
    event.target.parentNode.parentNode.children[2].value="";
    if(quantity[0]=="-" || quantity=="")
    alert('plz enter valid quantity')
    else{
        ++cnt;
        displayData(title,price,quantity);
    }
    
}
function displayData(title,price,quantity){
    document.getElementById('totalProductCount').innerText=cnt;
    const totalPrice = parseInt(price) * parseInt(quantity);
    totalProductsPrice+=totalPrice;
    document.getElementById('totalProductsPrice').innerText=totalProductsPrice;
    const tableBody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${cnt}</td>
    <td>${title}</td>
    <td>${price}</td>
    <td>${quantity}</td>
    <td>${totalPrice}</td>
    `
    tableBody.appendChild(tr);
}