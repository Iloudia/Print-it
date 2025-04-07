const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const bannerImg = document.querySelector('.banner-img');
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');
const tagLine = document.querySelector('#banner p');

let currentSlide = 0;

slides.forEach(() => {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll('.dot');

dots.forEach((dot,index) => {
	dot.addEventListener('click', () => {
		currentSlide = index;
		displaySlide(currentSlide);
	});
});

function displaySlide(index) {
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	tagLine.innerHTML = slides[index].tagLine;
	dots.forEach(dot => dot.classList.remove('dot_selected'));
	dots[index].classList.add('dot_selected');
  }

leftArrow.addEventListener('click', () => {
	if (currentSlide === 0) {
		currentSlide = slides.length - 1;
	} else {
		currentSlide--;
	}
	displaySlide(currentSlide);
});

rightArrow.addEventListener('click', () => {
	if (currentSlide === slides.length - 1) {
		currentSlide = 0;
	} else {
		currentSlide++;
	}
	displaySlide(currentSlide);
});

displaySlide(currentSlide);



