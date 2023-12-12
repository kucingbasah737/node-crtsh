/* global describe, it */

require('should');

const { hostnames: queryHostnames } = require('../lib');

describe('#hostnames', () => {
  it('should return correct value', async () => {
    const hostnames = await queryHostnames('%.example.org');

    hostnames.should.containEql('example.org', 'contain example.org');
    hostnames.should.containEql('www.example.org', 'contain www.example.org');
    hostnames.should.not.containEql('abc.example.org', 'not contain abc.example.org');
  });
});
