const tzip_12_tutorial = artifacts.require('tzip_12_tutorial');

const { initial_storage } = require('../migrations/1_deploy_tzip_12_tutorial.js');
const bigMapKeyNotFound = require('./../helpers/bigMapKeyNotFound.js');
const { unit } = require('./../helpers/constants');
/**
 * For testing on a babylonnet (testnet), instead of the sandbox network,
 * make sure to replace the keys for alice/bob accordingly.
 */
const { alice, bob } = require('./../scripts/sandbox/accounts');

contract('tzip_12_tutorial', accounts => {
    let storage;
    let tzip_12_tutorial_instance;

    beforeEach(async () => {
        tzip_12_tutorial_instance = await tzip_12_tutorial.deployed();
        /**
         * Display the current contract address for debugging purposes
         */
        console.log('Contract deployed at:', tzip_12_tutorial_instance.address);
        storage = await tzip_12_tutorial_instance.storage();
    });

    const expectedBalanceAlice = initial_storage[alice.pkh];
    it(`should store a balance of ${expectedBalanceAlice} for Alice`, async () => {
        /**
         * Get balance for Alice from the smart contract's storage (by a big map key)
         */
        const deployedBalanceAlice = await storage.get(alice.pkh);
        assert.equal(expectedBalanceAlice, deployedBalanceAlice);
    });

    it(`should not store any balance for Bob`, async () => {
        let fetchBalanceError;

        try {
            /**
             * If a big map key does not exist in the storage, the RPC returns a 404 HttpResponseError
             */
            await storage.get(bob.pkh);
        } catch (e) {
            fetchBalanceError = e;
        }

        assert(bigMapKeyNotFound(fetchBalanceError))
    });

    it('should transfer 1 token from Alice to Bob', async () => {
        const transferParam = [
            {   
                /**
                 * { 'single': unit } is a representation of our parameter variant `token_id`
                 */
                token_id: { 'single': unit },
                amount: 1,
                from_: alice.pkh,
                to_: bob.pkh
            }
        ];
        await tzip_12_tutorial_instance.transfer(transferParam);
        const deployedBalanceBob = await storage.get(bob.pkh);
        const expectedBalanceBob = 1;
        assert.equal(deployedBalanceBob, expectedBalanceBob);
    });
});