var welcome = document.querySelector('.welcome');

welcome.addEventListener('click', closeWelcome);

function closeWelcome(event) {
  if (event.target.classList.contains('close-img')) {
  event.target.parentNode.parentNode.remove();
  }
}
