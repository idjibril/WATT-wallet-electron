var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'Watlet';
config.appDescription = 'WATT Wallet';
config.appSlogan = 'Nothing is lost, nothing is created, everything is transformed';
config.appId = 'cash.watt.wallet';
config.appGitRepo = 'https://github.com/idjibril/WATT-wallet-electron';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 11877;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'wtl';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'watt-service';

// version on the bundled service (watt-service)
config.walletServiceBinaryVersion = "v0.13.0";

// config file format supported by wallet service, possible values:
// ini -->  for watt service (or its forks) version <= v0.8.3
// json --> for watt service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'https://explorer.watt.cash/transaction.html?hash=[[TX_HASH]]';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'watt.cash';


// remote node list update url, set to null if you don't have one
// for WATT:
// raw list: https://raw.githubusercontent.com/idjibril/WATT-nodes-json/master/turtlecoin-nodes.json
// filtered: https://watt.nodes.pub/api/getNodes
config.remoteNodeListUpdateUrl = 'https://watt.nodes.pub/api/getNodes';

// set to false if using raw/unfiltered node list
config.remoteNodeListFiltered = true;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  'watt.cash:11877',
];
config.remoteNodeCacheSupported = false;
config.remoteNodeSslSupported = false;

// your currency name
config.assetName = 'WATT';
// your currency ticker
config.assetTicker = 'WATT';
// your currency address prefix, for address validation
config.addressPrefix = 'WA';
// standard wallet address length, for address validation
config.addressLength = 97;
// integrated wallet address length, for address validation. Added length is length of payment ID encoded in base58.
config.integratedAddressLength = config.addressLength + ((64 * 11) / 8);

// minimum fee for sending transaction
config.minimumFee = 0.1;
// minimum amount for sending transaction
config.mininumSend = 0.1;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to represent human readable value
config.decimalPlaces = 2;
// to convert from atomic unit
config.decimalDivisor = 10 ** config.decimalPlaces;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'Watlet Donation',
    address: 'WA3URoGxSeXa91qrCqtugRjWhz3xdAgWCKHdqG1niMbRKsA5WRcRMJPNSPQKP2g1zz5EHf8dfpmMJVC56exMYSnV2Y9YhRXZH',
    paymentId: '',
  }
];
// cipher config for private address book
config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;
