const { mnemonic, secret, password: passphrase, email } = require("./faucet.json");
const { alice } = require('./scripts/sandbox/accounts');
module.exports = {
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  contracts_directory: "./contracts/main",
  networks: {
    development: {
      host: "http://localhost",
      port: 8732,
      network_id: "*",
      secretKey: alice.sk,
      type: "tezos"
    },
    babylonnet: {
      host: "https://api.tez.ie/rpc/babylonnet",
      network_id: "*",
      secret,
      mnemonic,
      passphrase,
      email,
      type: "tezos"
    }
  }
};
