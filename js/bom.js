const favchap = document.querySelector('#favchap');
const submit = document.querySelector('button');
const list = document.querySelector('#list');

buildButton.addEventListner('click', () => {
    
    let size = Number(listner.value);
    
    
    for (let i = 1; i <= size; i++) {
        let li = document.createElement('li');
        li.innerhtml = `item: <strong>${i}</strong>`;
        list.appendChild(li);
    }
    
}); 