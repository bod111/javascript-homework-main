const inputVal = document.querySelector('#validation-input');

inputVal.addEventListener('input', inputHandler);
function inputHandler({ target }) {

    if (target.value.length === Number(target.dataset.length)) {
    
        
        changecolor('valid', 'invalid')

        return
    }
    changecolor('invalid', 'valid')

}
function changecolor(addclass, removeclass) {
    inputVal.classList.add(addclass) 
    inputVal.classList.remove(removeclass)
}