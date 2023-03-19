import './style.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import dropDownMenuHandler from 'drop-down-menu-controller';

const parent = document.querySelectorAll('.main-bar li');
const subParent = document.querySelectorAll('.drop-down-menu li');
const navbar = document.querySelector('nav');

dropDownMenuHandler(navbar, parent, 'mouseover', 'click', 'active');
dropDownMenuHandler(navbar, subParent, 'mouseover', 'click', 'active-sub');
