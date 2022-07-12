/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const btn = document.querySelector('button');
const results = document.getElementById('output');
btn.addEventListener('click', getData);

function getData() {
    fetch(ENDPOINT).then(function(res){
        return res.json();
    }).then(function (data){
        console.log(data.items);
        data.items.forEach(item => {
            console.log(item.login);
            console.log(item.avatar_url);
            let itemCard = document.createElement('div');
            itemCard.innerHTML = `${item.login} + ${item.avatar_url}`;
            results.append(itemCard);
        })
        }).catch(function(e){
            console.log(e)
    })
    document.getElementById('message').style.visibility = 'hidden';
}

