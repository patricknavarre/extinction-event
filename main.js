/************
 * TOP LIST  *
 ************/

const topList = document.querySelectorAll('ol li');

const strikeThru = (event) => {
    event.target.style.textDecoration = 'line-through';
}
// loop thru the top list
for (item of topList) {
    item.addEventListener('click', strikeThru);
}

/***************
 * BOTTOM LIST *
 ***************/
const bottomList = document.querySelectorAll('ul li');

const fade = (event) => {
    event.target.style.opacity = 0;
}
for (item of bottomList) {
    item.addEventListener('click', fade);
}

/*****************
 * COLLAPSE PICS  *
 *****************/
const dinoPics = document.querySelectorAll('#row img');

const collapse = (event) => {
    event.target.style.width = 0;
}
for (item of dinoPics) {
    item.addEventListener('click', collapse)
}

/***************
 * TOTAL CHAOS *
 ***************/
const meteor = document.querySelector('#destroy-all');

const meteorMe = () => {
    for (item of topList) {
        item.style.textDecoration = 'line-through';
    }
    for (item of bottomList){
        item.style.opacity = 0;
    }
    for (item of dinoPics) {
        item.style.width = 0;
    }
}
meteor.addEventListener('click', meteorMe);






