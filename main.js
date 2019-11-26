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
  profileButton.classList.remove('nav-icon-button');
  // overviewPage.remove('main');
  displayTransactionPage();
}

profileButton.addEventListener('click', changePorfileIcon);

function changePorfileIcon() {
  profileButton.classList.add('nav-icon-button');
  walletButton.classList.remove('nav-icon-button');
  dashboardButton.classList.remove('nav-icon-button');
  // overviewPage.remove('main');
  displayProfilePage();
}

dashboardButton.addEventListener('click', changeDashboardIcon);

function changeDashboardIcon() {
  dashboardButton.classList.add('nav-icon-button');
  profileButton.classList.remove('nav-icon-button');
  walletButton.classList.remove('nav-icon-button');
  displayDashboardPage();
}

// This is where functions for the specific pages start
// Write Dashboard page first because it already exists and you can just copy and paste.

function displayDashboardPage() {
  overviewPage.innerHTML =
  `<div class="special" style="display:none;">
    <h1>Balancing Act</h1>
  </div>
  <div class="overview">
    <div class="left-container">
      <header>
        <h1>Balancing Act</h1>
      </header>
      <section class="welcome">
        <button class="close-button"><img class="close-img" src="assets/close.svg" alt="close icon"/></button>
        <h3 class="name">Welcome Oscar!</h3>
      </section>
      <div class="income-cards">
        <section class="card">
            <h6>Income</h6>
            <p>$2119.12</p>
        </section>
        <section class="card">
          <h6>Expenses</h6>
          <p>$420.54</p>
        </section>
        <section class="card">
          <h6>Credit Score</h6>
          <p>673</p>
        </section>
      </div>
      <div class="accounts-button">
        <h1 class="title">Accounts</h1>
        <button type="button" name="button" class="blue-button">Manage Accounts</button>
      </div>
      <div class="accounts">
        <table class="account-cards">
          <tr>
            <td><img src="assets/checking.svg" alt="checking icon" width="30px"></td>
            <td>Wells Fargo</td>
            <td>Checking</td>
          </tr>
        </table>
        <table class="account-cards">
          <tr>
            <td><img src="assets/savings.svg" alt="savings icon" width="30px"></td>
            <td>Wells Fargo</td>
            <td>Checking</td>
          </tr>
        </table>
        <table class="account-cards">
          <tr>
            <td><img src="assets/credit-card.svg" alt="credit card icon" width="30px"></td>
            <td>Amazon Credit</td>
            <td>Checking</td>
          </tr>
        </table>
        <table class="account-cards">
          <tr>
            <td><img src="assets/credit-card.svg" alt="credit card icon" width="30px"></td>
            <td>Southwest Credit</td>
            <td>Checking</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="right-container">
      <section class="transactions">
        <div class="recent-button">
          <h1 class="recent-title">Recent Transactions</h1>
          <button type="button" name="button" class="trans-button">New Transaction</button>
        </div>
        <section>
          <table class="trans_table">
            <tr>
              <th class="heading-date">Date</th>
              <th class="heading-payee">Payee</th>
              <th class="heading-inflow">Inflow</th>
              <th class="heading-outflow">Outflow</th>
            </tr>
            <tr>
              <td class="table-date">Oct 25, 2019</td>
              <td class="table-payee">Target</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$82.35</td>
            </tr>
            <tr>
              <td class="table-date">Oct 24, 2019</td>
              <td class="table-payee">Express</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$212.24</td>
            </tr>
            <tr>
              <td class="table-date">Oct 22, 2019</td>
              <td class="table-payee">Paycheck</td>
              <td class="table-inflow">$1,319.12</td>
              <td class="table-outflow">-</td>
            </tr>
            <tr>
              <td class="table-date">Oct 21, 2019</td>
              <td class="table-payee">Trader Joe's</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$54.92</td>
            </tr>
            <tr>
              <td class="table-date">Oct 20, 2019</td>
              <td class="table-payee">Shell</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$46.23</td>
            </tr>
            <tr>
              <td class="table-date">Oct 19, 2019</td>
              <td class="table-payee">Rent</td>
              <td class="table-inflow">$800.00</td>
              <td class="table-outflow">-</td>
            </tr>
            <tr>
              <td class="table-date">Oct 19, 2019</td>
              <td class="table-payee">Hapa Sushi</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$13.97</td>
            </tr>
            <tr>
              <td class="table-date">Oct 18, 2019</td>
              <td class="table-payee">Pig Train</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$4.83</td>
            </tr>
            <tr>
              <td class="table-date">Oct 18, 2019</td>
              <td class="table-payee">RTD</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$6.00</td>
            </tr>
          </table>
        </section>
      </section>
    </div>
  </div>`
}

function displayTransactionPage() {
  overviewPage.innerHTML =
  `<div class="right-container">
    <section class="transactions">
      <div class="recent-button">
        <h1 class="recent-title">Recent Transactions</h1>
        <button type="button" name="button" class="trans-button">New Transaction</button>
      </div>
      <section>
        <table class="trans_table">
          <tr>
            <th class="heading-date">Date</th>
            <th class="heading-payee">Payee</th>
            <th class="heading-inflow">Inflow</th>
            <th class="heading-outflow">Outflow</th>
          </tr>
          <tr>
            <td class="table-date">Oct 25, 2019</td>
            <td class="table-payee">Target</td>
            <td class="table-inflow">-</td>
            <td class="table-outflow">$82.35</td>
          </tr>
          <tr>
            <td class="table-date">Oct 24, 2019</td>
            <td class="table-payee">Express</td>
            <td class="table-inflow">-</td>
            <td class="table-outflow">$212.24</td>
          </tr>
          <tr>
            <td class="table-date">Oct 22, 2019</td>
            <td class="table-payee">Paycheck</td>
            <td class="table-inflow">$1,319.12</td>
            <td class="table-outflow">-</td>
          </tr>
          <tr>
            <td class="table-date">Oct 21, 2019</td>
            <td class="table-payee">Trader Joe's</td>
            <td class="table-inflow">-</td>
            <td class="table-outflow">$54.92</td>
          </tr>
          <tr>
            <td class="table-date">Oct 20, 2019</td>
            <td class="table-payee">Shell</td>
            <td class="table-inflow">-</td>
            <td class="table-outflow">$46.23</td>
          </tr>
          <tr>
            <td class="table-date">Oct 19, 2019</td>
            <td class="table-payee">Rent</td>
            <td class="table-inflow">$800.00</td>
            <td class="table-outflow">-</td>
          </tr>
          <tr>
            <td class="table-date">Oct 19, 2019</td>
            <td class="table-payee">Hapa Sushi</td>
            <td class="table-inflow">-</td>
            <td class="table-outflow">$13.97</td>
          </tr>
          <tr>
            <td class="table-date">Oct 18, 2019</td>
            <td class="table-payee">Pig Train</td>
            <td class="table-inflow">-</td>
            <td class="table-outflow">$4.83</td>
          </tr>
          <tr>
            <td class="table-date">Oct 18, 2019</td>
            <td class="table-payee">RTD</td>
            <td class="table-inflow">-</td>
            <td class="table-outflow">$6.00</td>
          </tr>
        </table>
      </section>
    </section>
  </div>`
}

function displayProfilePage() {
  overviewPage.innerHTML = `This is working!!`
}
