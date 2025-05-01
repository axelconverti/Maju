// Elementos del DOM
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionContainer = document.querySelector('.question-container');
const resultContainer = document.querySelector('.result-container');
const heartLoader = document.querySelector('.heart-loader');
const resultGif = document.getElementById('result-gif');
const loveMessage = document.getElementById('love-message');
const gifGallery = document.getElementById('gif-gallery');

const responseGifs = [
  'assets/gifs/ma18.gif'
];

const romanticMessage = "Maju, hace muchísimo que no escribo algo para alguien, y me cuesta poner en palabras algo que no te haya dicho ya en alguna de las mil veces que se me escapó todo lo que siento por vos. Pero de verdad, no te imaginás lo bien que me hacés, lo lindo que es estar cerca tuyo, lo mucho que me gustás y lo que te extraño cuando no estás. Sé que todavía me faltan cosas por descubrir de vos, pero me encantás. Y después de escucharte contar todo lo que pasaste, de darme cuenta de que pensamos parecido, de que soñamos con lo mismo... entendí que lo único que quiero es ser tu primer y último amor. Quiero quererte tanto que te olvides de todas las veces que alguien te hizo sentir menos. Quiero amarte tanto que nunca más sientas que tenés que cargar con todo sola. Que sí, podrías… pero ya no tenés que hacerlo, porque estoy acá. Quiero cuidarte. Quiero ser esa persona a la que busques cuando necesites hablar, ya sea para contar algo importante o simplemente un chisme. Quiero que seamos plan de finde, de escapadas, de atardeceres y lunas llenas. Quiero ser eso que siempre buscaste, y hacerte inmensamente feliz.";

const allGifs = [
  'assets/gifs/ma1.gif', 'assets/gifs/ma2.gif', 'assets/gifs/ma3.gif', 'assets/gifs/ma4.gif',
  'assets/gifs/ma6.gif', 'assets/gifs/ma7.gif', 'assets/gifs/ma8.gif', 'assets/gifs/ma9.gif', 
  'assets/gifs/ma10.gif', 'assets/gifs/ma11.gif', 'assets/gifs/ma12.gif', 'assets/gifs/ma13.gif', 
  'assets/gifs/ma14.gif', 'assets/gifs/ma15.gif', 'assets/gifs/ma16.gif', 'assets/gifs/ma17.gif', 
  'assets/gifs/ma19.gif', 'assets/gifs/ma20.gif', 'assets/gifs/ma22.gif', 
  'assets/gifs/ma23.gif'
];

const excludedGifs = ['assets/gifs/ma5.gif', 'assets/gifs/ma18.gif', 'assets/gifs/ma21.gif', 'assets/gifs/ma24.gif'];

const noButtonGif = 'assets/gifs/ma24.gif';

let noGifShown = false;
let currentGifTimeout;

function showTemporaryGif() {
  if (currentGifTimeout) {
    clearTimeout(currentGifTimeout);
  }
  
  questionContainer.classList.add('hidden');
  
  resultGif.src = noButtonGif;
  resultContainer.querySelector('h2').textContent = '¡Era el otro botón!';
  resultContainer.classList.remove('hidden');
  
  currentGifTimeout = setTimeout(() => {
    resultContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
  }, CONFIG.ANIMATION_DURATIONS.noButtonMessage);
  
  noGifShown = true;
}

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function getGalleryGifs() {
  const filteredGifs = allGifs.filter(gif => !excludedGifs.includes(gif));
  return shuffleArray(filteredGifs);
}

function createGifGallery() {
  gifGallery.innerHTML = '';
  
  const shuffledGifs = getGalleryGifs();
  
  shuffledGifs.forEach(gifSrc => {
    const img = document.createElement('img');
    img.src = gifSrc;
    img.alt = 'Cute animated love';
    img.loading = 'lazy';
    gifGallery.appendChild(img);
  });
}

yesBtn.addEventListener('click', function() {
  questionContainer.classList.add('hidden');
  
  heartLoader.classList.remove('hidden');
  
  setTimeout(() => {
    heartLoader.classList.add('hidden');
    
    resultGif.src = responseGifs[0];
    
    resultContainer.querySelector('h2').textContent = '¡Siiiiii, te amo!';
    
    loveMessage.textContent = romanticMessage;
    loveMessage.classList.remove('hidden');
    
    createGifGallery();
    gifGallery.classList.remove('hidden');
    
    resultContainer.classList.remove('hidden');
    
    document.body.classList.add('result-shown');
    
    resultGif.classList.add('sticky-gif');
    

  }, CONFIG.ANIMATION_DURATIONS.resultLoading);
});


noBtn.addEventListener('mouseover', function() {
  const maxX = window.innerWidth - this.offsetWidth;
  const maxY = window.innerHeight - this.offsetHeight;
  
  const newX = Math.max(0, Math.min(maxX, Math.random() * maxX));
  const newY = Math.max(0, Math.min(maxY, Math.random() * maxY));
  
  this.style.position = 'fixed';
  this.style.left = newX + 'px';
  this.style.top = newY + 'px';
});

noBtn.addEventListener('click', function() {
  showTemporaryGif();
});

function adjustForMobile() {
  const gifContainer = document.querySelector('.gif-container');
  const resultGifElement = document.getElementById('result-gif');
  
  if (window.innerWidth <= 768) {
    if (gifContainer) gifContainer.style.height = '150px';
    
    if (resultGifElement) {
      resultGifElement.style.maxWidth = '90%';
      resultGifElement.style.margin = '0 auto 1rem';
    }
  } else {
    if (gifContainer) gifContainer.style.height = '200px';
    
    if (resultGifElement) {
      resultGifElement.style.maxWidth = '400px';
      resultGifElement.style.margin = '0 auto 2rem';
    }
  }
  
}

window.addEventListener('load', adjustForMobile);
window.addEventListener('resize', adjustForMobile);

if ('ontouchstart' in window) {
  noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    
    const maxX = window.innerWidth - this.offsetWidth;
    const maxY = window.innerHeight - this.offsetHeight;
    
    const newX = Math.max(0, Math.min(maxX, Math.random() * maxX));
    const newY = Math.max(0, Math.min(maxY, Math.random() * maxY));
    
    this.style.position = 'fixed';
    this.style.left = newX + 'px';
    this.style.top = newY + 'px';
    
    showTemporaryGif();
  });
}