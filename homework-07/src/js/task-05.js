
const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output')  
}
refs.nameInput.addEventListener('input', changeNameFn);
function changeNameFn({target}) {

    if (target.value !== '') {
        refs.nameOutput.textContent = target.value;
        return 
    }
     refs.nameOutput.textContent = 'незнакомец';
}



