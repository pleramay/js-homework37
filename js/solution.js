'use strict';

//1
let elements = document.getElementById('ulId');
let valueArr = [];
let nameArr = [];

for(let attribute of elements.attributes){
    console.log(attribute);
    valueArr.push(attribute.value);
}
console.log(valueArr);

//2
for(let attribute of elements.attributes){
  nameArr.push(attribute);
}
console.log(nameArr);

//3
let lastList = elements.lastElementChild;
lastList.innerHTML= 'Привет, меня зовут Лера';
console.log(lastList.textContent);

//4
let firstList = elements.firstElementChild;
firstList.setAttribute('data-my-name', 'Lera');
console.log(firstList);

//5

elements.removeAttribute("data-dog-tail")
console.log(elements)

// let firstAttribute = elements.dataset.custom;
// let secondAttribute = elements.dataset.dogTail;
// console.log(firstAttribute)
// console.log(secondAttribute)