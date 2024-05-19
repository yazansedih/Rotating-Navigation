const openn = document.getElementById('open');
const colse = document.getElementById('close');
const container = document.querySelector('.container');

openn.addEventListener('click', () => container.classList.add('show-nav'));

colse.addEventListener('click', () => container.classList.remove('show-nav'));
