// SET SLIDER ELEMENTS
new Vue({
    el: '#example',
    data: {
        slides: 7
    },
    components: {
        'carousel-3d': Carousel3d.Carousel3d,
        'slide': Carousel3d.Slide
    }
})

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
        "coffeeFamily": "Titre1",
        "coffeeDescription": "description 1"

    },
    {
        "id": 1,
        "coffeeFamily": "Titre2",
        "coffeeDescription": "description 2"
    },
    {
        "id": 2,
        "coffeeFamily": "Titre3",
        "coffeeDescription": "description 3"
    }
];











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














// SET CONENT 
// function SetCoffeeFamiliesDescription(element) {
//         element
//         // for (let i = 0; i < slideesAll.length; i++) {
//         //     if (slideesAll[i].classList.contains('current')) {
//         //         console.log(slideesAll[i])
//         //         document.querySelector('.coffeeBean__family').textContent = TablesCoffeeFamiliesJson[i].coffeeFamily;
//         //         document.querySelector('.coffeeBean__description p').textContent = TablesCoffeeFamiliesJson[i].coffeeDescription;
//         //     }
//         // }

// }




slideesAll.forEach(element => {
    element.addEventListener('click',  () =>  {
        document.querySelector('.coffeeBean__family').textContent = TablesCoffeeFamiliesJson[element.dataset.id].coffeeFamily;
        document.querySelector('.coffeeBean__description p').textContent = TablesCoffeeFamiliesJson[element.dataset.id].coffeeDescription;
    })
});