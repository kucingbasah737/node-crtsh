const { default: axios } = require('axios');
const { HttpsProxyAgent } = require('https-proxy-agent');

// Example response item from crt.sh:
// {
//   "issuer_ca_id": 1397,
//   "issuer_name": "C=US, O=DigiCert Inc, OU=www.digicert.com, CN=DigiCert SHA2 High Assurance Server CA",
//   "common_name": "www.example.org",
//   "name_value": "example.org\nwww.example.org",
//   "id": 10557607,
//   "entry_timestamp": "2015-11-05T14:51:33.941",
//   "not_before": "2015-11-03T00:00:00",
//   "not_after": "2018-11-28T12:00:00",
//   "serial_number": "0e64c5fbc236ade14b172aeb41c78cb0",
//   "result_count": 3
// }

/**
 * @typedef CRTSHResultItem
 * @type {object}
 * @property {string} issuer_ca_id
 * @property {string} issuer_name
 * @property {string} common_name
 * @property {string} name_value -- newline separated names
 * @property {number} id
 * @property {Date} entry_timestamp
 * @property {Date} not_before
 * @property {Date} not_after
 * @property {string} serial_number
 * @property {number} result_count
 */

/**
 * Generic query to CRT.SH
 *
 * @param {string} query -- eg: %.example.org
 * @param {object} [options]
 * @param {import('axios').AxiosRequestConfig} [options.axiosConfig] -- beware, this object is mutable
 * @param {string} [options.proxy] -- proxy to use, eg: localhost:8080
 * @returns {Promise<CRTSHResultItem[]>}
 */
module.exports = async (query, options) => {
  try {
    const axiosConfig = options?.axiosConfig ? options.axiosConfig : {};

    if (options?.proxy) {
      axiosConfig.httpsAgent = new HttpsProxyAgent(`http://${options.proxy}`);
    }

    axiosConfig.params = {
      q: query,
      output: 'json'
    };

    const response = await axios.get('https://crt.sh/', axiosConfig);

    if (!response?.data) {
      const e = new Error('CRTSH: Empty response from CRT.SH');
      e.code = 'ERR_CRTSH_EMPTY_RESPONSE';
      throw e;
    }

    if (!Array.isArray(response.data)) {
      const e = new Error('CRTSH: Not returning an array');
      e.code = 'ERR_CRTSH_RETURN_NON_ARRAY';
      throw e;
    }

    return response.data;
  } catch (e) {
    if (['ERR_CRTSH_EMPTY_RESPONSE', 'ERR_CRTSH_RETURN_NON_ARRAY'].indexOf(e.code) >= 0) throw e;

    const newE = new Error('CRTSH: Exception on requesting query to CRT.SH');
    newE.code = 'ERR_CRTSH_REQUEST';
    newE.originalError = e;
    throw newE;
  }
};
