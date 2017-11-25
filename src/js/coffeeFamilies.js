// // SET SLIDER ELEMENTS
// new Vue({
//     el: '#example',
//     data: {
//         slides: 7
//     },
//     components: {
//         'carousel-3d': Carousel3d.Carousel3d,
//         'slide': Carousel3d.Slide
//     }
// })

// CONSTANTE
const prev = document.querySelector('.prev span')
const next = document.querySelector('.next span')
const carousel3D = document.querySelector('.carousel-3d-container')
const slideesAll = [...document.querySelectorAll('.slidee')];


// DATA CONST
const JsonCoffeeFamiliesLink = 'datas/coffeeFamilies.json';
const TablesCoffeeFamiliesJson = [
    {
        "id": 0,
        "coffeeFamily": "Titre0",
        "coffeeDescription": "description0"

    },
    {
        "id": 1,
        "coffeeFamily": "Titre1",
        "coffeeDescription": "description 1"
    },
    {
        "id": 2,
        "coffeeFamily": "Titre2",
        "coffeeDescription": "description 2"
    }
];








//VARIABLE
let incrementation = 0




console.log("elements", slideesAll)
// CHANGE CONTENT SLIDER

prev.textContent = '';
prev.innerHTML = '<img src="../img/arrow-left.png" >';
next.textContent = '';
next.innerHTML = '<img src="../img/arrow-right.png" >';



















setDataAttribut()
function setDataAttribut() {
    for (let i = 0; i < slideesAll.length; i++) {
        slideesAll[i].setAttribute('data-id', `${i}`);
    }
}














// // SET CONENT 
// function SetCoffeeFamiliesDescription(x) {

//     for (let i = 0; i < slideesAll.length; i++) {
//         console.log(x)
//         if (slideesAll[i].classList.contains('current')) {
//             console.log(slideesAll[i])
//             document.querySelector('.coffeeBean__family').textContent = TablesCoffeeFamiliesJson[slideesAll[i].dataset.id + x].coffeeFamily;
//             document.querySelector('.coffeeBean__description p').textContent = TablesCoffeeFamiliesJson[i+x].coffeeDescription;
//         }
//     }

// }


prev.addEventListener('click', () => {
    if ( slideesAll[incrementation].classList.contains('current') ) {
        if (incrementation <= 0) {
            incrementation = slideesAll.length - 1;
            console.log(incrementation);

            document.querySelector('.coffeeBean__family').textContent = TablesCoffeeFamiliesJson[incrementation].coffeeFamily;
            document.querySelector('.coffeeBean__description p').textContent = TablesCoffeeFamiliesJson[incrementation].coffeeDescription;
        }
        else {
            incrementation--;
            console.log(incrementation);
            document.querySelector('.coffeeBean__family').textContent = TablesCoffeeFamiliesJson[incrementation].coffeeFamily;
            document.querySelector('.coffeeBean__description p').textContent = TablesCoffeeFamiliesJson[incrementation].coffeeDescription;
            // document.querySelector('.coffeeBean__family').textContent = TablesCoffeeFamiliesJson[slideesAll[i].dataset.id].coffeeFamily;
            // document.querySelector('.coffeeBean__description p').textContent = TablesCoffeeFamiliesJson[slideesAll[i].dataset.id].coffeeDescription;
        }
    }
});
next.addEventListener('click', () => {
    if ( slideesAll[incrementation].classList.contains('current') ) {
        if (incrementation === slideesAll.length - 1) {
            incrementation = 0;
            console.log(incrementation);

            document.querySelector('.coffeeBean__family').textContent = TablesCoffeeFamiliesJson[incrementation].coffeeFamily;
            document.querySelector('.coffeeBean__description p').textContent = TablesCoffeeFamiliesJson[incrementation].coffeeDescription;
        }
        else {
            incrementation++;
            console.log(incrementation);
            document.querySelector('.coffeeBean__family').textContent = TablesCoffeeFamiliesJson[incrementation].coffeeFamily;
            document.querySelector('.coffeeBean__description p').textContent = TablesCoffeeFamiliesJson[incrementation].coffeeDescription;
            // document.querySelector('.coffeeBean__family').textContent = TablesCoffeeFamiliesJson[slideesAll[i].dataset.id].coffeeFamily;
            // document.querySelector('.coffeeBean__description p').textContent = TablesCoffeeFamiliesJson[slideesAll[i].dataset.id].coffeeDescription;
        }
    }
});







slideesAll.forEach(element => {
    element.addEventListener('click', () => {
        incrementation = element.dataset.id;
        document.querySelector('.coffeeBean__family').textContent = TablesCoffeeFamiliesJson[incrementation].coffeeFamily;
        document.querySelector('.coffeeBean__description p').textContent = TablesCoffeeFamiliesJson[incrementation].coffeeDescription;
    })
});

