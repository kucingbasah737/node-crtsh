const { hostnames } = require('../lib');

(async () => {
  console.log('HOSTNAMES:');
  console.log(JSON.stringify(await hostnames('%.example.org'), null, 2));

  // Will print:
  // [
  //   "example.org",
  //   "www.example.org",
  //   "www.testdomain.example.org"
  // ]
})();
