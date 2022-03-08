// ********* grid view buttons ***********
let cardBtn = document.querySelector('#cardBtn');

let listBtn = document.querySelector('#listBtn')

let listViewBtn = document.querySelector('.companies');

let intViewportWidth = parseInt(visualViewport.width);




function size() {
    intViewportWidth = parseInt(visualViewport.width);
    if ((intViewportWidth < 900) && (intViewportWidth > 550)) {
        listViewBtn.setAttribute('id', 'listView');
    } else if (intViewportWidth < 550) {
        listViewBtn.setAttribute('id', '');
    } else {
        listViewBtn.setAttribute('id', '');
    }
}



function togglecards() {
    listViewBtn.setAttribute('id', '');
}
function toggleList() {
    listViewBtn.setAttribute('id', 'listView');
}



size();
cardBtn.addEventListener('click', function() {togglecards()});

listBtn.addEventListener('click', function() {toggleList()});

visualViewport.addEventListener('resize', function() {size()});