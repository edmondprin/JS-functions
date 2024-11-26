const alertButton = document.getElementById("alertButton");
const opoenWindowButton = document.getElementById("openWindowButton");
const navigateBackButton = document.getElementById("navigateBackButton");
const changeURLButton = document.getElementById("changeURLButton");

alertButton.addEventListener('click', () => {
  window.alert('This is an alert');
});


opoenWindowButton.addEventListener('click', () => {
  window.open('https://example.com', '_blank');
});

navigateBackButton.addEventListener('click', () => {
  history.back();
});

changeURLButton.addEventListener('click', () => {
  location.href = 'https://example.com';
});