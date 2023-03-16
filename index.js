const facultyItem = document.querySelector('#faculty');
console.log(facultyItem);
const facultyMenu = document.querySelector('.faculty-menu');

facultyItem.addEventListener('click', () => {
  console.log('clicked');
  facultyMenu.classList.toggle('visible');
});
