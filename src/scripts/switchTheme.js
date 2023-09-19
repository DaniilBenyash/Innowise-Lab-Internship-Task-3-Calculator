const switcherTheme = document.getElementById('calculator__button-theme');

const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
};

function switchTheme(theme) {
  localStorage.setItem('theme', theme);

  const body = document.getElementById('theme');

  body.setAttribute('data-theme', theme);
}

function checkTheme() {
  const currentTheme = localStorage.getItem('theme');

  // eslint-disable-next-line no-unused-expressions
  currentTheme === THEME.LIGHT || currentTheme === null
    ? switchTheme(THEME.LIGHT) : switchTheme(THEME.DARK);
}
checkTheme();

function setTheme() {
  const currentTheme = localStorage.getItem('theme');

  // eslint-disable-next-line no-unused-expressions
  currentTheme === THEME.LIGHT ? switchTheme(THEME.DARK) : switchTheme(THEME.LIGHT);
}

switcherTheme.addEventListener('click', setTheme);
