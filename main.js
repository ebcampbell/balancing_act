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
  `<main>
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
          <section class="card income">
              <h6>Income</h6>
              <p>$2,119.12</p>
          </section>
          <section class="card expenses">
            <h6>Expenses</h6>
            <p>$420.54</p>
          </section>
          <section class="card credit">
            <h6>Credit Score</h6>
            <p>673</p>
          </section>
        </div>
        <div class="accounts-banner">
          <span class="title">Accounts</span>
          <button class="accounts-button">Manage Accounts</button>
        </div>
        <div class="accounts">
          <section class="account-cards">
            <img src="assets/checking.svg" alt="checking icon">
            <span class="column-one">Wells Fargo</span>
            <span class="column-two">Checking</span>
          </section>
          <section class="account-cards">
            <img src="assets/savings.svg" alt="savings icon">
            <span class="column-one">Wells Fargo</span>
            <span class="column-two">Savings</span>
          </section>
          <section class="account-cards">
            <img src="assets/credit-card.svg" alt="credit card icon">
            <span class="column-one">Amazon Credit</span>
            <span class="column-two amazon">Credit Card</span>
          </section>
          <section class="account-cards">
            <img src="assets/credit-card.svg" alt="credit card icon" width="30px">
            <span class="column-one">Southwest Credit</span>
            <span class="column-two southwest">Credit Card</span>
          </section>
        </div>
      </div>
      <div class="right-container">
        <section class="transactions">
          <div class="recent-banner">
            <h1 class="recent-title">Recent Transactions</h1>
            <button type="button" name="button" class="trans-button">New Transaction</button>
          </div>
          <section>
            <table class="trans-table">
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
    </div>
  </main>`
}

function displayTransactionPage() {
  overviewPage.innerHTML =
  `<main>
    <div class="transaction-page">
      <header class="trans-header">
        <h1 class="trans-title">Transactions</h1>
        <button>all</button>
        <button>inflow</button>
        <button>outflow</button>
      </header>
      <div class="trans-left-container">
        <div class="table-container">
          <table class="trans-table-2">
            <tr>
              <th class="heading-date">Date</th>
              <th class="heading-account">Account</th>
              <th class="heading-payee">Payee</th>
              <th class="heading-inflow">Inflow</th>
              <th class="heading-outflow">Outflow</th>
            </tr>
            <tr>
              <td class="table-date">Oct-25-19</td>
              <td class="table-account">Credit Card</td>
              <td class="table-payee">Target</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$82.35</td>
            </tr>
            <tr>
              <td class="table-date">Oct-24-19</td>
              <td class="table-account">Credit Card</td>
              <td class="table-payee">Express</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$212.24</td>
            </tr>
            <tr>
              <td class="table-date">Oct-22-19</td>
              <td class="table-account">Checking</td>
              <td class="table-payee">Paycheck</td>
              <td class="table-inflow">$1,319.12</td>
              <td class="table-outflow">-</td>
            </tr>
            <tr>
              <td class="table-date">Oct-21-19</td>
              <td class="table-account">Credit Card</td>
              <td class="table-payee">Trader Joe's</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$54.92</td>
            </tr>
            <tr>
              <td class="table-date">Oct-20-19</td>
              <td class="table-account">Credit Card</td>
              <td class="table-payee">Shell</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$46.23</td>
            </tr>
            <tr>
              <td class="table-date">Oct-19-19</td>
              <td class="table-account">Savings</td>
              <td class="table-payee">Rent</td>
              <td class="table-inflow">$800.00</td>
              <td class="table-outflow">-</td>
            </tr>
            <tr>
              <td class="table-date">Oct-19-19</td>
              <td class="table-account">Checking</td>
              <td class="table-payee">Hapa Sushi</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$13.97</td>
            </tr>
            <tr>
              <td class="table-date">Oct-18-19</td>
              <td class="table-account">Credit Card</td>
              <td class="table-payee">Pig Train</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$4.83</td>
            </tr>
            <tr>
                <td class="table-date">Oct-18-19</td>
              <td class="table-account">Checking</td>
              <td class="table-payee">RTD</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$6.00</td>
            </tr>
            <tr>
              <td class="table-date">Oct-25-19</td>
              <td class="table-account">Checking</td>
              <td class="table-payee">Express</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$121.24</td>
            </tr>
            <tr>
              <td class="table-date">Oct-25-19</td>
              <td class="table-account">Checking</td>
              <td class="table-payee">Express</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$121.24</td>
            </tr>
            <tr>
              <td class="table-date">Oct-25-19</td>
              <td class="table-account">Checking</td>
              <td class="table-payee">Express</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$121.24</td>
            </tr>
            <tr>
              <td class="table-date">Oct-25-19</td>
              <td class="table-account">Checking</td>
              <td class="table-payee">Express</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$121.24</td>
            </tr>
            <tr>
              <td class="table-date">Oct-25-19</td>
              <td class="table-account">Checking</td>
              <td class="table-payee">Express</td>
              <td class="table-inflow">-</td>
              <td class="table-outflow">$121.24</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="trans-right-container">
        <div class="content">
          <header class="new-trans-title">
            <h1>New Transaction</h1>
          </header>
          <form action="">
            <section class="dropdown">
              <div class="trans-type-dropdow">
                <label for="type">Type of Transaction:</label>
                <select id="type">
                  <option value="Expense">Expense</option>
                  <option value="Expense">Expense</option>
                  <option value="Expense">Expense</option>
                  <option value="Expense">Expense</option>
                </select>
              </div>
              <div class="category-dropdown">
                <label for="category-dropdown">Category:</label>
                <select id="category-dropdown">
                  <option value="Select One">- Select One -</option>
                  <option value="this one">This one</option>
                  <option value="or this">Or this</option>
                  <option value="lastly">Lastly</option>
                </select>
              </div>
              <div class="account-dropdown">
                <label for="account">Account from:</label>
                <select id="account">
                  <option value="select one">- Select One -</option>
                  <option value="credit card">Credit Card</option>
                  <option value="amazon">Amazon</option>
                  <option value="southwest">Southwest</option>
                </select>
              </div>
            </section>
            <section class="text">
              <div class="payee-input">
                <label for="payee">Payee:</label>
                <input type="text" id="payee">
              </div>
              <div class="outflow-input">
                <label for="outflow">Outflow:</label>
                <input type="text" id="outflow">
              </div>
              <div class="category-input">
                <label for="category-text">Category:</label>
                <input type="text" id="category-text">
              </div>
              <div class="log-button">
                <input type="submit" value="Log Expense">
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  </main>`
}

function displayProfilePage() {
  overviewPage.innerHTML = `This is working!!`
}
