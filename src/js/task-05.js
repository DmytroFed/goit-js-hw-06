
const refs = {
    input: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (refs.nameOutput.textContent = '') { 
     refs.nameOutput.textContent = "Anonymous";   
    }; 
   refs.nameOutput.textContent = event.currentTarget.value;
};
    
    
