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
    execSync(`cd ${basePath} && make drop`, baseOptions)
}

const update = () => {
    console.log('Updating BBBox');
    clean();
    init();
}

const restart = () => kill() && start()

module.exports = { start, kill, clean, update, init, restart };