const inputRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

function updateFontsize() {
   textRef.style.fontSize = inputRef.value+'px' 


}
inputRef.addEventListener('input', updateFontsize)

