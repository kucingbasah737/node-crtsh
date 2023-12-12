const isValidHostname = require('is-valid-hostname');
const crtshQuery = require('./query');

/**
 * List of hostnames certificate
 *
 * @param {string} hostname -- eg: %.example.org
 * @param {object} [options]
* @param {import('axios').AxiosRequestConfig} [options.axiosConfig] -- beware, this object is mutable
 * @returns {Promise<string[]>}
 */
module.exports = async (hostname, options) => {
  const names = new Set();

  (await crtshQuery(hostname, options))
    .filter((item) => isValidHostname(item.common_name))
    .forEach((item) => {
      // names.add(item.common_name);

      item.name_value.split('\n').forEach((nameValueItem) => {
        if (isValidHostname(nameValueItem)) names.add(nameValueItem);
      });
    });

  return [...names];
};
