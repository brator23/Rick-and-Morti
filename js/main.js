const API = "https://rickandmortyapi.com/api/character";
const API2 = "http://localhost:8000/characters";

let block1 = document.querySelector(".block1");
let list = document.querySelector(".list");
let block2 = document.querySelector(".block-2");
let list2 = document.querySelector(".list2");

async function readNames() {
  const res = await fetch(API);
  const data = await res.json();
  // console.log(data);
  // console.log(data.results);
  list.innerHTML = "";
  data.results.forEach((elem) => {
    list.innerHTML += `
    <div>
      <p class="paraName" >${elem.name}</p>
      <img class="imgRick" src="${elem.image}" />
      
    </div>   
  `;
  });
}
readNames();





let newData = [];

async function readNames2() {
  const res = await fetch(API);
  const data = await res.json();
  data.results.forEach((item) => {
    newData.push({ charName: item.name, charImage: item.image });
  });
  postfromExternal(newData);
}
readNames2();

function postfromExternal(newData2) {
  console.log(newData2);
  newData2.forEach((elem) => {
    // console.log(elem);
    fetch(API2, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        chName: elem.charName,
        chImg: elem.charImage,
      }),
    });
  });
}



async function readNamesfromLocal() {
  const res = await fetch(API2);
  const data = await res.json();
  console.log(data);
  list2.innerHTML = "";
  data.forEach((elem) => {
    list2.innerHTML += `
    <div>
      <p class="paraName" >${elem.chName}</p>
      <img class="imgRick" src="${elem.chImg}" />

    </div>
  `;
  });
}
readNamesfromLocal();

