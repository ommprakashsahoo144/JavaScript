let item = {id:"z101",imgUrl:"https://melam.com/wp-content/uploads/2022/12/ambur-biriyani.jpg",iName:"Chicken Biriyani",price:399,qty:1};



let htmlCode = `<tr>
                        <td>${item.id}</td>
                        <td>
                            <img src="${item.imgUrl}" alt="" width="30px" height="30px">
                        </td>
                        <td>${item.iName}</td>
                        <td>&#8377; ${item.price}</td>
                        <td>
                            <i class="bi bi-dash-circle-fill" id="minus-btn"></i>
                            <span id="display">${item.qty}</span>
                            <i class="bi bi-plus-circle-fill" id="plus-btn"></i>
                        </td>
                        <td>
                            &#8377;
                            <span id="total-price">${item.price*item.qty}</span>
                            .00
                        </td>
                </tr>`;

document.getElementById('item-data').innerHTML=htmlCode;


    let minusBtn = document.querySelector('#minus-btn');
    let plusBtn = document.querySelector('#plus-btn');
    let displayTag = document.querySelector('#display');
    let tpriceDisplayTag = document.querySelector('#total-price');

    let storeQty = localStorage.getItem('itemQty')?Number(localStorage.getItem('itemQty')):item.qty;
    item.qty = storeQty;

    displayTag.textContent = storeQty;

    function incQty() {
        storeQty++;
        item.qty = storeQty;
        localStorage.setItem('itemQty',storeQty);
        displayTag.textContent=Number(localStorage.getItem('itemQty'));
        tpriceDisplayTag.textContent = item.price * item.qty;
    }
    plusBtn.addEventListener('click', incQty);

    function decQty() {
        if (storeQty > 1) {
            storeQty--;
            item.qty= storeQty;
            localStorage.setItem('itemQty',storeQty);
            displayTag.textContent=Number(localStorage.getItem('itemQty'));   
            tpriceDisplayTag.textContent = item.price * item.qty;
        }
    }
    minusBtn.addEventListener('click', decQty);
    tpriceDisplayTag.textContent = item.price * item.qty;