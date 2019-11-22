var welcome = document.querySelector('.welcome');

var button = document.querySelector('.close-button')

button.addEventListener('click', closeWelcome);

function closeWelcome {
  welcome.style.display = 'none'
}

// welcome.addEventListener('click', closeWelcome);

// function closeWelcome(event) {
//   if (event.target.classList.contains('close-img')) {
//   event.target.parentNode.parentNode.remove();
//   }
// }
