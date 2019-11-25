var welcome = document.querySelector('.welcome');

var button = document.querySelector('.close-button')

button.addEventListener('click', closeWelcome);

function closeWelcome() {
  welcome.style.display = 'none'
}

// welcome.addEventListener('click', closeWelcome);

// function closeWelcome(event) {
//   if (event.target.classList.contains('close-img')) {
//   event.target.parentNode.parentNode.remove();
//   }
// }
var dashboardButton = document.querySelector('.dashboard-button');
var walletButton = document.querySelector('.wallet-button');
var profileButton = document.querySelector('.profile-button');
var overviewPage = document.querySelector('main');

walletButton.addEventListener('click', changeWalletIcon);

function changeWalletIcon() {
  walletButton.classList.add('nav-icon-button');
  dashboardButton.classList.remove('nav-icon-button');
  overviewPage.remove('main');
}

profileButton.addEventListener('click', changePorfileIcon);

function changePorfileIcon() {
  profileButton.classList.add('nav-icon-button');
  dashboardButton.classList.remove('nav-button-icon');

}
