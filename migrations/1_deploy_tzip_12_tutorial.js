const tzip_12 = artifacts.require('tzip_12_tutorial');
const { alice } = require('./../scripts/sandbox/accounts');

const token_balance = 10;
const initial_storage = {
    [`${alice.pkh}`]: token_balance
};

module.exports = async (deployer, network, accounts) => {
    await deployer.deploy(tzip_12, initial_storage);
};
module.exports.initial_storage = initial_storage;
