# jarvis-client [WIP]

> JARVIS: Just a rather very intelligent system

This project is the web UI part of the JARVIS system. It acts as a virtual assistant for managing your busy life.

## Installation

You'll need [Node.js](https://nodejs.org/), [Bower](http://bower.io/), and [gulp](http://gulpjs.com/) to build the app.

```shell
npm install
bower install
gulp build
```

The files will be compiled into the `dist` folder, ready to be served.

## Configuration

Configuration files go inside the `config` folder. You can create any file recognized by [node-config](http://lorenwest.github.io/node-config/). Currently JSON and YAML are supported.

## Development

Other gulp tasks available for development work:

```shell
gulp serve          # compile and serve the app at http://localhost:9000
gulp serve --mocks  # as above, but mock the API
```
