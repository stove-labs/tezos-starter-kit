const { execSync } = require('child_process');
const ganacheCliInstalled = require('../node_modules/ganache-cli/package.json');

const baseOptions = { stdio: 'inherit' };
const ganacheVersionRequired = '6.11.0-tezos.0';

(function () {
    console.log("ganache installed is", ganacheCliInstalled.version)
    if (ganacheCliInstalled.version !== ganacheVersionRequired) {
        console.log('Updating ganache-cli')
        execSync(`npm i ganache-cli@${ganacheVersionRequired}`, baseOptions)  
    };  
})();
