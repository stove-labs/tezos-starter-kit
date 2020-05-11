const tzip_12 = artifacts.require('tzip_12_tutorial');
const { alice } = require('./../scripts/sandbox/accounts');
const { MichelsonMap } = require('@taquito/taquito');
const saveContractAddress = require('./../helpers/saveContractAddress');

const token_balance = 10;
const initial_storage = MichelsonMap.fromLiteral({
    [`${alice.pkh}`]: token_balance
});

module.exports = async (deployer, network, accounts) => {

    // TODO format to await instead of .then
    deployer.deploy(tzip_12, initial_storage)
    .then( (contract) => 
        saveContractAddress('tzip12', contract.address)
    );

};
module.exports.initial_storage = initial_storage;
