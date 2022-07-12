/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'cars.json';
// const cars = [];
fetch('cars.json')
.then((response) => response.json())
.then((data) => console.log(data))

//neatsisiuncia
.then(function (data){
    console.log(data.items);
    data.items.forEach(item => {
        console.log(item.brand);
        console.log(item.models);
        let itemCard = document.createElement('div');
        itemCard.innerHTML = `Brand: ${item.brand}, Models:  ${item.models}`;
        results.append(itemCard);
    })
    }).catch(function(e){
        console.log(e)
})
