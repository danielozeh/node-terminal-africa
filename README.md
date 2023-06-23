# Node Package for Terminal Africa

## Terminal Africa
The Terminal Shipping API (TShip) provides a single interface for integrating shipping carriers within your applications. The API allows anyone to programatically get shipping rates and arrange pickup and delivery.

## Quick start
### Requirements
```
node >= 14.0.0
npm >= 6.0.0
```
Login to <a href="https://app.terminal.africa/">Terminal Africa</a> to get your authorization keys

## Setup
Insall the package to your application.

using npm :
`npm install terminal-africa`

or using yarn
`yarn install terminal-africa`

Create new environment variables
```
TERMINAL_AFRICA_URL
TERMINAL_AFRICA_SECRET_KEY
```

e.g
```
TERMINAL_AFRICA_URL=https://sandbox.terminal.africa
TERMINAL_AFRICA_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxx
```

More Info on Authorization can be found <a href="https://docs.terminal.africa/tship/authentication"> here </a>


## Initialization
`import TerminalAfrica from 'terminal-africa'`

or

`const TerminalAfrica = require('terminal-africa')`