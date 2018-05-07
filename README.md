### Description
This is a sample react-redux app to buy BTC for USD.
The app pull the latest BTC rate from bitfinex.com
and you can buy BTC using your account (pre-loaded with 156.12 USD). 

### Initial setup
`npm install`

### Run development
`npm start`

### Run against stub
`npm run start:stub`

### Unit Tests
`npm test` runs the jest tests, currently only for the reducers.

### E2E Tests
`npm run e2e` runs nigthwatch tests.
[sorry not completed, but coming up]

### Build
`npm run build` will build a version of the app that can be deployed.

### Project layout

* index.js: Starting point for the app when it is started.
* store.js: Sets up the redux store for the app. Using thunk and logger middlewares.
* APP.jsx: Connects all the components together.
* constants.js: Required constant variables for the app, such as redux action type.
* thunk-actions: Redux middleware to call async function, such as API calls.
* container: All the components that make this UI.
    * Account: Displays account information.
        * Account-row: Re-used to display USD & BTC amounts in the account.
    * Trade: Displays the trading block of the code.
        * Trade-row: Primarily a form input re-used to display each row of the trade section. Can be configured by passing various props.
    * Trade-CTA: The call to action component, which displays the button to complete the trade.
* actions: All the actions that can be performed.
    * btc-rate: Actions related to fetching the BTC rate, and calculating BTC amount user will receive for USD entered.
    * update-account: Action related to performing the transaction and updating the user's account. 
* reducers: All the reducers that manage the redux store.
    * account: Manages the state of the account, and performs the trade.
    * btc-trade: <anages the user's input and calculates the BTC conversion.
* services: APIs the app might call.
    * fetch-price: gets the latest BTC rate from bitfinex.com.
    * fetch-price-stub: returns a hardcoded response with BTC rate 9937.7.
* styles: All the css for the app.

