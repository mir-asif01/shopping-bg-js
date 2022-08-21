
// let count = 0;
const itemsArray = [];
function displayItems(item){
    // count = count + 1;

    let updatedTotalPrice = 00;
    const totalPriceOutput = document.getElementById('total-price');
    // totalPriceOutput.innerText = 
    const tableBody = document.getElementById('table-body');
    document.getElementById('table-body').innerHTML = '';
    for(let i=0;i<item.length;i++){
        // console.log(itemsArray)
        // console.log(item[i]);
        const name = item[i].itemName;
        const price = item[i].itemPrice;
        // console.log(name,price);
        const createdTr = document.createElement('tr');
        createdTr.innerHTML = `
        <tr>
            <th scope="row">${i+1}</th>
            <td>${name}</td>
            <td>${price}</td>
       </tr>
        `
        tableBody.appendChild(createdTr)
        updatedTotalPrice = updatedTotalPrice + price;
        totalPriceOutput.innerText = updatedTotalPrice;
    }
    return;
    
}

function addToCart(btn){
    const itemName = btn.parentNode.children[1].innerText;
    const itemPriceStr = btn.parentNode.children[2].children[0].innerText;
    const itemPrice = Number(itemPriceStr);

    const itemObj = {
        itemName : itemName,
        itemPrice : itemPrice
    }
    itemsArray.push(itemObj)
    const totalAddeditems = document.getElementById('total-products');
    totalAddeditems.innerText = itemsArray.length;
    displayItems(itemsArray); 
    return;  
}