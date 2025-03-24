let item = {id:"z101",imgUrl:"https://melam.com/wp-content/uploads/2022/12/ambur-biriyani.jpg",
iName:"Chicken Biriyani",price:399,qty:1};


let htmlCode = `<tr>
                        <td>${item.id}</td>
                        <td>
                            <img src="${item.imgUrl}" alt="" width="30px" height="30px">
                        </td>
                        <td>${item.iName}</td>
                        <td>&#8377; ${item.price}</td>
                        <td>
                            <i class="bi bi-dash-circle-fill" id="minus-btn"></i>
                            <span id="display-qty">${item.qty}</span>
                            <i class="bi bi-plus-circle-fill" id="plus-btn"></i>
                        </td>
                        <td>
                            &#8377;
                            <span id="total-price">${item.price*item.qty}</span>
                            .00
                        </td>
                </tr>`;

document.getElementById('item-data').innerHTML=htmlCode;


let minusBtn=document.querySelector('#minus-btn');
let plusBtn=document.querySelector('#plus-btn');
let qtyDisplayTag = document.querySelector('#display-qty');
let tpriceDisplayTag = document.querySelector('#total-price');

function incQty()
{
    qtyDisplayTag.textContent = ++item.qty;
    tpriceDisplayTag.textContent= item.qty*item.price;
}
plusBtn.addEventListener('click',incQty);

function decQty(){
    if(item.qty>1){
        qtyDisplayTag.textContent = --item.qty;
        tpriceDisplayTag.textContent= item.qty*item.price;
    }
    else{
        qtyDisplayTag.textContent = 1;
        tpriceDisplayTag.textContent= item.qty*item.price;
    }
}
minusBtn.addEventListener('click',decQty);