import './sass/main.scss';
import './styles.css';
import menuGalerry from './menu.json';
import itemsMenu from './tamplates/menu.hbs';


const galleryRef = document.querySelector('.js-menu')

const markUp = itemsMenu(menuGalerry)
galleryRef.insertAdjacentHTML('beforeend', markUp)


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const localTheme = localStorage.getItem('theme');
const themeToggle = document.querySelector('#theme-switch-toggle');

themeToggle.addEventListener('change', onToggleChange);

if (localTheme) {
  document.body.classList.add(localTheme);
}

if (localTheme === Theme.DARK) {
  themeToggle.checked = true;
}

function onToggleChange() {
  if (themeToggle.checked) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}