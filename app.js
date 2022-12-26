"use strict";

const selVal = document.querySelector('select');
const btn = document.querySelector('button');
const output = document.querySelector('.output');
const url = 'https://swapi.dev/api/';

btn.addEventListener('click', ()=>{
    console.log(selVal.value);
    btn.disabled = true;
    output.innerHTML = 'Searching...'
    fetch(url+'/'+selVal.value) //when the button click fetch the url
    .then(res => res.json()) //response at json
    .then(data => { //when data back response as data object
        console.log(data); //output to the console the data
        myOutput(data, selVal.value);
    })
})

function myOutput(data, val){
    const total = data.results;
    const itemName = val == 'films' ? 'title' : 'name';
    btn.disabled = false;
    output.innerHTML= `Search for ${val}`;
    console.log(data);
    total.forEach(ele => {
        output.innerHTML += `<div>${ele[itemName]}</div>`
    })
}