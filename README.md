# Node Package for Terminal Africa

## Introduction
The Terminal Shipping API (TShip) provides a single interface for integrating shipping carriers within your applications. The API allows anyone to programatically get shipping rates and arrange pickup and delivery.


## Quick start
### Requirements
```
node >= 14.0.0
npm >= 6.0.0
```
### Package Documentation
<a href="" target="_blank"> Here </a> is a comprehensive documentation to help you get started


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

For staging, use test keys and for production, use live keys

Login to <a href="https://app.terminal.africa/" target="_blank">Terminal Africa</a> to get your authorization keys

More Info on Authorization can be found <a href="https://docs.terminal.africa/tship/authentication" target="_blank"> here </a>


## Initialization
`import TerminalAfrica from 'terminal-africa'`

or

`const TerminalAfrica = require('terminal-africa')`


## Credits
- [Daniel Ozeh](https://github.com/danielozeh)
- [All Contributors](../../contributors)


## License
- MIT License (MIT). Please see [License File](LICENSE.md) for more information.


## Terminal Africa Official Documentation
You can find Terminal Official Documentation <a href="https://docs.terminal.africa/tship/" target="_blank"> here </a>