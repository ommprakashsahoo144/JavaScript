let item1 = {id:101,imgUrl:"https://www.ohmyveg.co.uk/wp-content/uploads/2023/07/Idli-1-scaled-e1722868852202-735x735.jpg",
    iName:"Idli",price:50,qty:1};

 let item2 = {id:102,imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSROYZU-uYBsoDv_tB8yN2u0jhXg1PN-taZRA&s",
        iName:"Dosha",price:60,qty:1};

 let item3 = {id:103,imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf9q1Wp29XhE7ezm-hL3p72FYMEkwmD4m6Kw&s",
            iName:"Bara",price:70,qty:1};

let items=[item1,item2,item3];


function displayItems(foodItems){
    if(foodItems.length==0)return;

    let eachItems=``;

    foodItems.forEach((item)=>{
        eachItems+= `<tr>
                        <td>${item.id}</td>
                        <td>
                            <img src="${item.imgUrl}" alt="" width="30px" height="30px">
                        </td>
                        <td>${item.iName}</td>
                        <td>&#8377; ${item.price}</td>
                        <td>
                            <i class="bi bi-dash-circle-fill" id="minus-btn"
                            onclick="decQty(${item.id})"></i>
                            <span id="display">${item.qty}</span>
                            <i class="bi bi-plus-circle-fill" id="plus-btn"
                            onclick="incQty(${item.id})"></i>
                        </td>
                        <td>
                            &#8377;
                            <span id="total-price">${item.price*item.qty}</span>
                            .00
                        </td>
                </tr>`;

    });

    document.getElementById('item-data').innerHTML=eachItems;
}
displayItems(items);


function incQty(id)
{
    const retArr=items.map((items)=>
    {
        if(items.id==id)
        {
            const newObj={...items,Qty:++items.qty};
            return newObj;
        }
        else return items;
    })
    displayItems(retArr);
}

function decQty(id) {
    const retArr = items.map((item) => {
        if (item.id === id) {
            if (item.qty > 0) {
                return { ...item, Qty:--item.qty };
            } else {
                return item;
            }
        }
        return item;
    });
    displayItems(retArr);
}
    