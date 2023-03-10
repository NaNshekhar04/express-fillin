<img align="right" src="https://user-images.githubusercontent.com/51878265/186825286-499db16b-5b95-488d-b6d5-09d44521b890.png" height="70px"> <h2>Express Fillin</h2>
### Starts up express server without writing that boring server boilerplate code.
   
   [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
   [![Npm package total downloads](https://badgen.net/npm/dt/super-express-cli)](https://www.npmjs.com/package/express-fillin)
   [![Npm package version](https://badgen.net/npm/v/super-express-cli)](https://www.npmjs.com/package/express-fillin)



## Installation

First install `npm install express` for your application to use express Server.

Than, run `npm install express-fillin` for your app & than simply require it.

Using npm:

```bash
$ npm install express-fillin
$ npm install --save express-fillin
```

## How it works

Once Installed and required now simply call that required constant and pass in the PORT number of your choice it this will set up your express server if everything goes well else it will throw an error.

## Quick Start

```bash
const express = require("express-fillin");

express(5500);
```

## Ref

```bash
express(PORT);
```

This will setup a basic express server which will log the success message of server running if setup properly instead of writing that repeated boilerplate for setting up the express server.

### Contributing
1. [Install node](http://nodejs.org/#download).
2. Clone this repository `$ gh repo clone NaNshekhar04/express-fillin`.
3. Install dependencies `$ npm install`.
4. Start Hacking!

Feel free to contribute to the repo. Just make sure you Open an [Issue](https://github.com/NaNshekhar04/express-fillin/issues) first before raising the Pull Request!


