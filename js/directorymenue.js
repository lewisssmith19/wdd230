// ********* grid view buttons ***********
let cardBtn = document.querySelector('#cardBtn');
let cardImage = document.querySelector('#cardImage');
let listBtn = document.querySelector('#listBtn');

let listImage = document.querySelector('#listImage');
let listViewBtn = document.querySelector('.companies');

let intViewportWidth = parseInt(visualViewport.width);
console.log(cardImage)
console.log(cardBtn)




function size() {
    intViewportWidth = parseInt(visualViewport.width);
    if ((intViewportWidth < 900) && (intViewportWidth > 550)) {
        listViewBtn.setAttribute('id', 'listView');
    } else if (intViewportWidth < 550) {
        listViewBtn.setAttribute('id', '');
    }
    // } else {
    //     listViewBtn.setAttribute('id', '');
    // }
}



function togglecards() {
    listViewBtn.setAttribute('id', '');
    cardImage.setAttribute('id','blueBtn')
    listImage.setAttribute('id', '')
}
function toggleList() {
    listViewBtn.setAttribute('id', 'listView');
    cardImage.setAttribute('id', '')
    listImage.setAttribute('id', 'blueBtn')
}



size();
cardBtn.addEventListener('click', function() {togglecards()});

listBtn.addEventListener('click', function() {toggleList()});

visualViewport.addEventListener('resize', function() {size()});