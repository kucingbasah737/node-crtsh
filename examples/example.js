const { query, hostnames } = require('../lib');

(async () => {
  console.log('QUERY:');
  console.log(JSON.stringify(await query('%.example.org'), null, 2));

  console.log('\n\nHOSTNAMES:');
  console.log(JSON.stringify(await hostnames('%.example.org'), null, 2));
})();
