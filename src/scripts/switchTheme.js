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

  switchTheme(currentTheme === THEME.LIGHT || currentTheme === null ? THEME.LIGHT : THEME.DARK);
}
checkTheme();

export function setTheme() {
  const currentTheme = localStorage.getItem('theme');

  switchTheme(currentTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
}
