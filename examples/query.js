const { query } = require('../lib');

(async () => {
  console.log('QUERY:');
  console.log(JSON.stringify(await query('%.example.org'), null, 2));

  // Will print:
  // [
  //   {
  //     "issuer_ca_id": 185756,
  //     "issuer_name": "C=US, O=DigiCert Inc, CN=DigiCert TLS RSA SHA256 2020 CA1",
  //     "common_name": "www.example.org",
  //     "name_value": "example.org\nwww.example.org",
  //     "id": 8913351873,
  //     "entry_timestamp": "2023-03-17T16:26:38.016",
  //     "not_before": "2023-01-13T00:00:00",
  //     "not_after": "2024-02-13T23:59:59",
  //     "serial_number": "0c1fcb184518c7e3866741236d6b73f1",
  //     "result_count": 3
  //   },
  //   {
  //     "issuer_ca_id": 185756,
  //     "issuer_name": "C=US, O=DigiCert Inc, CN=DigiCert TLS RSA SHA256 2020 CA1",
  //     "common_name": "www.example.org",
  //     "name_value": "example.org\nwww.example.org",
  //     "id": 8396709327,
  //     "entry_timestamp": "2023-01-13T13:18:21.987",
  //     "not_before": "2023-01-13T00:00:00",
  //     "not_after": "2024-02-13T23:59:59",
  //     "serial_number": "0c1fcb184518c7e3866741236d6b73f1",
  //     "result_count": 3
  //   },
  //   {
  //     "issuer_ca_id": 185756,
  //     "issuer_name": "C=US, O=DigiCert Inc, CN=DigiCert TLS RSA SHA256 2020 CA1",
  //     "common_name": "www.example.org",
  //     "name_value": "example.org\nwww.example.org",
  //     "id": 6359075900,
  //     "entry_timestamp": "2022-03-17T10:02:40.41",
  //     "not_before": "2022-03-14T00:00:00",
  //     "not_after": "2023-03-14T23:59:59",
  //     "serial_number": "0faa63109307bc3d414892640ccd4d9a",
  //     "result_count": 3
  //   },
  //   {
  //     "issuer_ca_id": 185756,
  //     "issuer_name": "C=US, O=DigiCert Inc, CN=DigiCert TLS RSA SHA256 2020 CA1",
  //     "common_name": "www.example.org",
  //     "name_value": "example.org\nwww.example.org",
  //     "id": 6342480680,
  //     "entry_timestamp": "2022-03-14T22:48:46.166",
  //     "not_before": "2022-03-14T00:00:00",
  //     "not_after": "2023-03-14T23:59:59",
  //     "serial_number": "0faa63109307bc3d414892640ccd4d9a",
  //     "result_count": 3
  //   },
  //   {
  //     "issuer_ca_id": 185756,
  //     "issuer_name": "C=US, O=DigiCert Inc, CN=DigiCert TLS RSA SHA256 2020 CA1",
  //     "common_name": "www.example.org",
  //     "name_value": "example.org\nwww.example.org",
  //     "id": 5813209289,
  //     "entry_timestamp": "2021-12-17T11:32:05.977",
  //     "not_before": "2021-12-10T00:00:00",
  //     "not_after": "2022-12-09T23:59:59",
  //     "serial_number": "025216e1c4998e2632aa5d1da985b43c",
  //     "result_count": 3
  //   },
  //   {
  //     "issuer_ca_id": 185756,
  //     "issuer_name": "C=US, O=DigiCert Inc, CN=DigiCert TLS RSA SHA256 2020 CA1",
  //     "common_name": "www.example.org",
  //     "name_value": "example.org\nwww.example.org",
  //     "id": 5771467708,
  //     "entry_timestamp": "2021-12-10T05:18:05.116",
  //     "not_before": "2021-12-10T00:00:00",
  //     "not_after": "2022-12-09T23:59:59",
  //     "serial_number": "025216e1c4998e2632aa5d1da985b43c",
  //     "result_count": 3
  //   },
  //   {
  //     "issuer_ca_id": 185756,
  //     "issuer_name": "C=US, O=DigiCert Inc, CN=DigiCert TLS RSA SHA256 2020 CA1",
  //     "common_name": "www.example.org",
  //     "name_value": "example.org\nwww.example.org",
  //     "id": 3704614715,
  //     "entry_timestamp": "2020-11-27T13:49:06.706",
  //     "not_before": "2020-11-24T00:00:00",
  //     "not_after": "2021-12-25T23:59:59",
  //     "serial_number": "0fbe08b0854d05738ab0cce1c9afeec9",
  //     "result_count": 3
  //   },
  //   {
  //     "issuer_ca_id": 185756,
  //     "issuer_name": "C=US, O=DigiCert Inc, CN=DigiCert TLS RSA SHA256 2020 CA1",
  //     "common_name": "www.example.org",
  //     "name_value": "example.org\nwww.example.org",
  //     "id": 3692510597,
  //     "entry_timestamp": "2020-11-24T19:32:04.319",
  //     "not_before": "2020-11-24T00:00:00",
  //     "not_after": "2021-12-25T23:59:59",
  //     "serial_number": "0fbe08b0854d05738ab0cce1c9afeec9",
  //     "result_count": 3
  //   },
  //   {
  //     "issuer_ca_id": 1191,
  //     "issuer_name": "C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA",
  //     "common_name": "www.example.org",
  //     "name_value": "example.org\nwww.example.org",
  //     "id": 2854376823,
  //     "entry_timestamp": "2020-05-25T16:25:01.313",
  //     "not_before": "2018-11-28T00:00:00",
  //     "not_after": "2020-12-02T12:00:00",
  //     "serial_number": "0fd078dd48f1a2bd4d0f2ba96b6038fe",
  //     "result_count": 3
  //   },
  //   {
  //     "issuer_ca_id": 1191,
  //     "issuer_name": "C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA",
  //     "common_name": "www.example.org",
  //     "name_value": "example.org\nwww.example.org",
  //     "id": 2854374595,
  //     "entry_timestamp": "2020-05-25T16:24:55.817",
  //     "not_before": "2018-11-28T00:00:00",
  //     "not_after": "2020-12-02T12:00:00",
  //     "serial_number": "0fd078dd48f1a2bd4d0f2ba96b6038fe",
  //     "result_count": 3
  //   },
  //   {
  //     "issuer_ca_id": 1191,
  //     "issuer_name": "C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA",
  //     "common_name": "www.example.org",
  //     "name_value": "example.org\nwww.example.org",
  //     "id": 2854374664,
  //     "entry_timestamp": "2020-05-25T16:24:48.514",
  //     "not_before": "2018-11-28T00:00:00",
  //     "not_after": "2020-12-02T12:00:00",
  //     "serial_number": "0fd078dd48f1a2bd4d0f2ba96b6038fe",
  //     "result_count": 3
  //   },
  //   {
  //     "issuer_ca_id": 327,
  //     "issuer_name": "C=DE, O=Humboldt-Universitaet zu Berlin, CN=HU-CA, emailAddress=pki@hu-berlin.de",
  //     "common_name": "www2.hu-berlin.de",
  //     "name_value": "www.testdomain.example.org",
  //     "id": 2380565475,
  //     "entry_timestamp": "2020-01-26T20:32:28.224",
  //     "not_before": "2011-01-11T07:26:09",
  //     "not_after": "2016-01-10T07:26:09",
  //     "serial_number": "114b83a1",
  //     "result_count": 1
  //   },
  //   {
  //     "issuer_ca_id": 1191,
  //     "issuer_name": "C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA",
  //     "common_name": "www.example.org",
  //     "name_value": "example.org\nwww.example.org",
  //     "id": 987119772,
  //     "entry_timestamp": "2018-11-29T13:44:14.118",
  //     "not_before": "2018-11-28T00:00:00",
  //     "not_after": "2020-12-02T12:00:00",
  //     "serial_number": "0fd078dd48f1a2bd4d0f2ba96b6038fe",
  //     "result_count": 3
  //   },
  //   {
  //     "issuer_ca_id": 1191,
  //     "issuer_name": "C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA",
  //     "common_name": "www.example.org",
  //     "name_value": "example.org\nwww.example.org",
  //     "id": 984858191,
  //     "entry_timestamp": "2018-11-28T21:20:12.606",
  //     "not_before": "2018-11-28T00:00:00",
  //     "not_after": "2020-12-02T12:00:00",
  //     "serial_number": "0fd078dd48f1a2bd4d0f2ba96b6038fe",
  //     "result_count": 3
  //   },
  //   {
  //     "issuer_ca_id": 810,
  //     "issuer_name": "C=DE, O=T-Systems SfR GmbH, CN=T-Systems SfR CA 2, emailAddress=ca@t-systems-sfr.com",
  //     "common_name": "tdreg001.t-systems-sfr.com",
  //     "name_value": "name@example.org",
  //     "id": 39377559,
  //     "entry_timestamp": "2016-10-02T07:59:24.627",
  //     "not_before": "2014-04-10T06:59:21",
  //     "not_after": "2019-04-09T06:59:21",
  //     "serial_number": "1765bed9246411",
  //     "result_count": 1
  //   },
  //   {
  //     "issuer_ca_id": 810,
  //     "issuer_name": "C=DE, O=T-Systems SfR GmbH, CN=T-Systems SfR CA 2, emailAddress=ca@t-systems-sfr.com",
  //     "common_name": "tdhost001.t-systems-sfr.com",
  //     "name_value": "name@example.org",
  //     "id": 39208913,
  //     "entry_timestamp": "2016-10-02T05:55:49.465",
  //     "not_before": "2014-04-10T06:59:20",
  //     "not_after": "2019-04-09T06:59:20",
  //     "serial_number": "1765bed8b82141",
  //     "result_count": 1
  //   },
  //   {
  //     "issuer_ca_id": 1397,
  //     "issuer_name": "C=US, O=DigiCert Inc, OU=www.digicert.com, CN=DigiCert SHA2 High Assurance Server CA",
  //     "common_name": "www.example.org",
  //     "name_value": "example.org\nwww.example.org",
  //     "id": 10557607,
  //     "entry_timestamp": "2015-11-05T14:51:33.941",
  //     "not_before": "2015-11-03T00:00:00",
  //     "not_after": "2018-11-28T12:00:00",
  //     "serial_number": "0e64c5fbc236ade14b172aeb41c78cb0",
  //     "result_count": 3
  //   },
  //   {
  //     "issuer_ca_id": 1397,
  //     "issuer_name": "C=US, O=DigiCert Inc, OU=www.digicert.com, CN=DigiCert SHA2 High Assurance Server CA",
  //     "common_name": "www.example.org",
  //     "name_value": "example.org\nwww.example.org",
  //     "id": 5857507,
  //     "entry_timestamp": "2014-12-11T14:36:57.201",
  //     "not_before": "2014-11-06T00:00:00",
  //     "not_after": "2015-11-13T12:00:00",
  //     "serial_number": "0411de8f53b462f6a5a861b712ec6b59",
  //     "result_count": 3
  //   }
  // ]
})();
