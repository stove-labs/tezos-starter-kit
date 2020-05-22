const { execSync } = require('child_process');
const { existsSync } = require('fs');
const rimraf = require('rimraf');

const baseOptions = { stdio: 'inherit' };
const basePath = './scripts/tools/bbbox';

const init = () => {
    if (!existsSync(basePath)) {
        console.log('Initializing BBBox');
        execSync(`git clone https://github.com/baking-bad/bbbox ${basePath}`, baseOptions);
    }
}

const start = () => {
    init();
    execSync(`cd ${basePath} && make bcd`, baseOptions)
    console.log('Starting BBBox')
}

const kill = () => {
    execSync(`cd ${basePath} && make bcd-stop`, baseOptions)
    console.log('Killing BBBox');
}

const clean = () => {
    console.log('Cleaning BBBox');
    rimraf.sync(basePath);
}

const update = () => {
    console.log('Updating BBBox');
    clean();
    init();
}

module.exports = { start, kill, clean, update, init };