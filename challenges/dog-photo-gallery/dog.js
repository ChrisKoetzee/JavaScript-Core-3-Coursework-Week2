// function onLoad(){
const btn = document.createElement('button');
const list = document.createElement('ul');
const listItem = document.createElement('li');
const image = document.createElement('img');
const container = document.querySelector('div');

btn.setAttribute("id", "btn");
btn.textContent = "Add-image";

console.log(container);
console.log(btn, list);

container.append(btn, list);
list.appendChild(listItem);
listItem.appendChild(image);
// }

// window.onload = onLoad();

   btn.addEventListener("click", () => {
      fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then(data => {
         image.src = data.message;
      })
      .catch((error) => console.log(error));
      });

image.style.width = "400px";
image.style.height = "auto";      






// const btn = document.querySelector('.btn');
// const list = document.querySelector('.list');
// const listItem = document.createElement('li');
// const img = document.createElement('img');
// console.log(list);
// console.log(listItem);
// list.appendChild(listItem);
// listItem.appendChild(img);

// btn.addEventListener("click", () => {
//   fetch('https://dog.ceo/api/breeds/image/random')
//   .then((response) => response.json())
//   .then((data) => {
//    img.src = data.message
//    })
//    .catch((error) => console.log(error));               
// });
        




//  let btn = document.getElementsByClassName('btn');
//  let list = document.getElementsByClassName('list');
//  let listItem = document.createElement('li');
//  let img = document.createElement('img');
// //  list.setAttribute("images", "src");

//  list.appendChild(listItem);
//  listItem.appendChild(img);

//     btn.addEventListener("click", () => {
//       img.src = data.message
//       // let getImg = getImage();
//       // return getImg
//     });

// function getImage(){
//    fetch('https://dog.ceo/api/breeds/image/random')
//    .then(response => response.json())
//    .then(data => data = console.log(img))
//    .catch((error) => console.log(error));
// }