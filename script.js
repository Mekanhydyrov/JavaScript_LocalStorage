// Local Storage
let val;

// set item
const firstname = localStorage.setItem('firstname', 'Kıvanç');
const lastname = localStorage.setItem('lastname', 'Türkmen');

// get item
val = localStorage.getItem('firstname');

// remove item
// localStorage.removeItem('firstname');

// clear
localStorage.clear();


console.log(val);

console.log(localStorage);


//Session Storage
const sity = sessionStorage.setItem('sity', 'Ankara');

const country = sessionStorage.setItem('country', 'Türkiye');

console.log(sessionStorage);