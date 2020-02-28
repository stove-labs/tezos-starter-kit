const { mnemonic, secret, password, email } = require("./faucet.json");
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
      host: "https://babylonnet.tezos.org.ua",
      network_id: "*",
      secret,
      mnemonic,
      password,
      email,
      type: "tezos"
    },
    carthagenet: {
      host: "https://carthagenet.tezos.org.ua",
      network_id: "*",
      secret,
      mnemonic,
      password,
      email,
      type: "tezos"
    }
  }
};
