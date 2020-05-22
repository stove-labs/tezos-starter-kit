const promiseRetry = require('promise-retry');
const { TezosToolkit } = require('@taquito/taquito');
const { networks } = require('./../../truffle-config');

const Tezos = new TezosToolkit();
Tezos.setProvider({
    rpc: `${networks.development.host}:${networks.development.port}`
})

/**
 * Wait for the first block to   be available - which signifies that the sandbox network has started
 */
module.exports = ((tezos) => {
    console.log('Waiting for the sandbox network to be ready');    
    promiseRetry((retry, number) => {
        return Tezos.rpc.getBlockHeader({
            block: 1
        })
        .then(() => console.log('Sandbox network ready!'))
        .catch(retry);
    }, { retries: 8 });
})()