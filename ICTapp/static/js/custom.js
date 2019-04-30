// Кэш
function preloadImages() {
   const array = [
      '/media/img/1.jpg',
      '/media/img/2.jpg',
      '/media/img/3.jpg',
      '/media/img/4.jpg',
      '/media/img/5.jpg'
   ];

   if (!preloadImages.list) preloadImages.list = [];

   const list = preloadImages.list;

   array.forEach(item => {
      const img = new Image();

      img.addEventListener('load', () => {
         const idx = list.indexOf(this);
         if (idx !== -1) list.splice(idx, 1)
      });

      img.src = item;
      list.push(img);
   });

   const backgrounds = list.map(item => `url('${item.src}')`);
   const content = document.querySelector('header');
   let current = 0;

   function nextBackground() {
      current++;
      current = current % backgrounds.length;
      content.style.backgroundImage = backgrounds[current];
   }

   setInterval(nextBackground, 6000);
   content.style.backgroundImage = backgrounds[current];
}

window.addEventListener('load', preloadImages);

const inputArr = document.querySelectorAll('.subscribe input');
const subscribeTextarea = document.querySelectorAll('.subscribe textarea')[0];

inputArr[1].placeholder = 'Имя и фамилия';
inputArr[2].placeholder = 'Почта';
inputArr[3].placeholder = 'Телефон';

subscribeTextarea.placeholder = 'Ваш вопрос';