# express-fillin v1.0.0

<!-- [![npm version](https://badge.fury.io/js/express-booster.svg)](https://badge.fury.io/js/express-booster)

[![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)](https://travis-ci.org/dwyl/esta) -->

Starts up express server without writing that boring server boilerplate code.

## Installation

First install `npm install express` for your application to use express Server.

Than, run `npm install express-fillin` for your app & than simply require it.

Using npm:

```shell
$ npm install express-fillin
$ npm install --save express-fillin
```

## How it works

Once Installed and required now simply call that required constant and pass in the PORT number of your choice it this will set up your express server if everything goes well else it will throw an error.

## Quick Start

```js
const express = require("express-fillin");

express(5500);
```

## Ref

```js
express(PORT);
```

This will setup a basic express server which will log the success message of server running if setup properly instead of writing that repeated boilerplate for setting up the express server.
