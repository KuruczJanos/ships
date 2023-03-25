/*
File: app.js
Author: Kurucz János
Copyright: 2023, Kurucz János
Group: Szoft  I-1 E
Date: 2023-03-25
Github: https://github.com/KuruczJanos/ships.git
Licenc: GNU GPL
*/
const doc = {
    shipbody: null
};
const state = {
    database: []
}
window.addEventListener('load', () => {
    init();
    getDatabase();
    
});
function init() {
    doc.shipbody = document.querySelector('#shipbody');
}

function getDatabase() {
    let host = 'http://localhost:8000/';
    let endpoint = 'ships';
    let url = host + endpoint;
    fetch(url)
    .then(response => response.json())
    .then(result => {        
        state.ships = result;
        render();
    });
}
function render() {
    let rows = '';
    state.ships.forEach(ship => {
        console.log(ship.name);
        rows += `
            <tr>
                <td>${ship.name}</td>
                <td>${ship.length}</td>
                <td>${ship.price}</td>
                <td>${ship.person}</td>
                <td>${ship.trailer}</td>
            </tr>
        `;
    });
    doc.shipbody.innerHTML = rows;
}