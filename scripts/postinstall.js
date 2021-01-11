const { execSync } = require('child_process');
const ganacheCliInstalled = require('../node_modules/ganache-cli/package.json');
const ganacheVersionRequired = require('../package.json').devDependencies['ganache-cli'];

const baseOptions = { stdio: 'inherit' };

(function () {
    if (ganacheCliInstalled.version !== ganacheVersionRequired) {
        console.log('Updating ganache-cli to ', ganacheVersionRequired);
        execSync(`npm i ganache-cli@${ganacheVersionRequired}`, baseOptions);
    };  
})();
