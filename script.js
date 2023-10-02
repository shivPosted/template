'use strict';

///////////////////////////////////////
// Modal window
const click = document.querySelector('.click-me');

const tags = ['flowers', 'animals', 'beach', 'amoled', 'anime'];
click.addEventListener('onclick', () => {
  const rn = Math.floor(Math.random() * 5);
  console.log(rn);
});
