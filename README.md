# jarvis-client [WIP]

> JARVIS: Just a rather very intelligent system

This project is the web UI part of the JARVIS system. (You'll also need the [jarvis-api](https://github.com/eheikes/jarvis-api) and some plugins.) It acts as a virtual assistant for managing your busy life, helping you reach a zero- or negative-sum "inbox".

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

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## License

Copyright 2015 Eric Heikes.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0).

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
