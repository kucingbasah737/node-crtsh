/* global describe, it, before */

require('should');

const { hostnames: queryHostnames } = require('../lib');

describe('#hostnames', () => {
  let hostnames;

  before(async () => {
    hostnames = await queryHostnames('%.example.org');
  });

  it('return should contain correct hostnames', () => {
    hostnames.should.containEql('example.org', 'contain "example.org"');
    hostnames.should.containEql('www.example.org', 'contain "www.example.org"');
  });

  it('return should not contain wrong result', () => {
    hostnames.should.not.containEql('tdreg001.t-systems-sfr.com', 'not contain "tdreg001.t-systems-sfr.com"');
    hostnames.should.not.containEql('name@example.org', 'not contain "name@example.org"');
  });
});
