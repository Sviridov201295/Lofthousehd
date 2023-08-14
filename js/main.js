/* Nav icon */
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row')

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active')
    nav.classList.toggle('header__top-row--mobile')
    document.body.classList.toggle('no-scroll')
}

/* Phone Mask */
mask('[data-tel-input]');

// Удаляется '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input)=>{
    input.addEventListener('input', ()=>{
        if (input.value == '+') input.value = '';
    })

    input.addEventListener('blur', ()=>{
        if (input.value == '+') input.value = '';
    })
});


/* Yandex Map */

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
	// Создание карты.
	var map = new ymaps.Map('map', {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [59.906400, 30.254414],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 16,
	});
}