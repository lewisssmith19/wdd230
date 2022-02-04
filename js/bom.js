const input = document.querySelector('#favchap');
const buildButton = document.getElementById('add');
const list = document.querySelector('.list');
console.log(input)
buildButton.addEventListener('click', function() {
    
    
        let li = document.createElement('li');
        li.innerHTML = `item: <strong>${input.value}</strong>`;
        list.appendChild(li);
    

}); 

