
const list = document.querySelector('#categories');
console.log("list", list)
const allList = list.querySelectorAll('.item');
console.log(`В списке ${allList.length} категрии:`)
allList.forEach((category) => {
    const heading = category.querySelector("h2");
    const array = category.querySelectorAll("li");
    console.log("----------------------------")
    console.log(`Категория: ${heading.textContent} `)
    console.log(`Количество элементов: ${array.length}`)
});












