const { execSync } = require('child_process');
const ganacheCliInstalled = require('../node_modules/ganache-cli/package.json');

const baseOptions = { stdio: 'inherit' };
// this patch does not work when reading the required ganache version from ../package.json
const ganacheVersionRequired = '6.12.1-tezos.0';

(function () {
    if (ganacheCliInstalled.version !== ganacheVersionRequired) {
        console.log('Updating ganache-cli to ', ganacheVersionRequired);
        execSync(`npm i ganache-cli@${ganacheVersionRequired}`, baseOptions)  
    };  
})();
