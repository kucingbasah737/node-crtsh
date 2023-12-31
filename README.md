# node-crtsh
[![Version npm](https://img.shields.io/npm/v/crtsh.svg)](https://www.npmjs.com/package/crtsh)
[![node.js version](https://img.shields.io/node/v/hostname-natural-order)](https://www.npmjs.com/package/hostname-natural-order)
[![Module type: CJS](https://img.shields.io/badge/module%20type-cjs-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/standard/semistandard)
[![Unit test status](https://github.com/kucingbasah737/node-crtsh/actions/workflows/node.js.yml/badge.svg)](https://github.com/kucingbasah737/node-crtsh/actions/workflows/node.js.yml?query=branch%3Amain)
[![License](https://img.shields.io/github/license/kucingbasah737/node-crtsh)](https://github.com/kucingbasah737/node-crtsh/blob/main/LICENSE)

Query [Crtsh (crt.sh)](https://crt.sh/) from node.js.

Crtsh is a platform that permits you search for certificates that have been logged by CT.
Many people use this to enumerate subdomains.

- [node-crtsh](#node-crtsh)
  - [How to install](#how-to-install)
  - [Usage](#usage)
    - [Getting all domain and subdomains certificate names](#getting-all-domain-and-subdomains-certificate-names)
  - [API](#api)
    - [hostnames(pattern, \[options\])](#hostnamespattern-options)
  - [Changelog](#changelog)
  - [License](#license)

## How to install
```shell
npm i crtsh
```

## Usage

### Getting all domain and subdomains certificate names

```javascript
const { hostnames: crtshHostnames } = require('crtsh');

(async () => {
  const hostnames = await crtshHostnames('%.example.org');
  console.log(JSON.stringify(hostnames, null, 2);

  // Will print:
  // [
  //   "example.org",
  //   "www.example.org",
  //   "www.testdomain.example.org"
  // ]
})();

```

More examples can be found at [examples](examples/).

## API
### hostnames(pattern, [options])
* **pattern** (string, required):
  
  For example, if you want to list certificate names for "example.org" domain and subdomains, you can use "%.example.org".

* **options** (object, optional):

  * **axiosConfig**: optional config to pass to axios.
  * **proxy**: optional proxy to use, eg: "localhost:8080"

    For example, if you want to use proxy when calling crt.sh, you can use syntax like this:

    ```javascript
    const { hostnames } = require('crtsh');
    await hostnames('%.example.org', { proxy: 'localhost:8080' });
    ```

## Changelog
See [CHANGELOG.md](CHANGELOG.md).

## License
License under MIT License.
