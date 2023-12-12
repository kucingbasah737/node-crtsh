# node-crtsh
[![Module type: CJS](https://img.shields.io/badge/module%20type-cjs-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![License](https://img.shields.io/github/license/kucingbasah737/node-crtsh)](https://github.com/kucingbasah737/node-crtsh/blob/main/LICENSE)

Query [Crtsh (crt.sh)](https://crt.sh/) from node.js.

Crtsh is a platform that permits you search for certificates that have been logged by CT.
Many people use this to enumerate subdomains.

- [node-crtsh](#node-crtsh)
  - [How to install](#how-to-install)
  - [Usage](#usage)
    - [Getting all domain and subdomains certificate names](#getting-all-domain-and-subdomains-certificate-names)
  - [API](#api)
    - [hostames(pattern, \[options\])](#hostamespattern-options)
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
### hostames(pattern, [options])
* pattern (string, required):
  
  For example, if you want to list certificate names for "example.org" domain and subdomains, you can use "%.example.org".

* options (object, optional):

  * axiosConfig: config to pass to axios.

    For example, if you want to use proxy when calling crt.sh, you can use syntax like this:

    ```javascript
    const { hostnames } = require('crtsh');
    await hostnames('%.example.org', { axiosConfig: { proxy: { host: 'localhost', port: 8080 }}});
    ```

## License
License under MIT License.
