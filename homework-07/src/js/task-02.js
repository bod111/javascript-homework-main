const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const list = document.querySelector("#ingredients");
const allLi = ingredients.map(item => {
  const newli = document.createElement("li");
  newli.textContent = item;
  return newli
})
list.append(...allLi);
console.log("list", list);
