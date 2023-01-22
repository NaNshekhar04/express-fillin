# express-booster v1.0.0

[![npm version](https://badge.fury.io/js/express-booster.svg)](https://badge.fury.io/js/express-booster)

[![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)](https://travis-ci.org/dwyl/esta)

Starts up express server without writing that boring server boilerplate code.

## Installation

First, run `npm install express-router` for your app & than simply require it.

Using npm:

```shell
$ npm install express-booster
$ npm install --save express-booster
```

## How it works

Once Installed and required now simply call that required constant and pass in the PORT number of your choice it this will set up your express server if everything goes well

## Quick Start

```js
const booster = require("express-booster");

booster(5500);
```
