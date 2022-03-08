let cardBtn = document.querySelector('#cardBtn');
let listBtn = document.querySelector('#listBtn')
let cardViewBtnId = document.querySelector('.cards');
let intViewportWidth = parseInt(visualViewport.width);

function size() {
    intViewportWidth = parseInt(visualViewport.width);
    if ((intViewportWidth < 900) && (intViewportWidth > 550)) {
        listViewId.setAttribute('id', 'listView');
    } else if (intViewportWidth < 550) {
        listViewId.setAttribute('id', '');
    } else {
        listViewId.setAttribute('id', '');
    }
}

function togglecards() {
    listViewId.setAttribute('id', '');
}
function toggleList() {
    listViewId.setAttribute('id', 'listView');
}

size();
cardBtn.addEventListener('click', function() {togglecards()});
listBtn.addEventListener('click', function() {toggleList()});
visualViewport.addEventListener('resize', function() {size()});