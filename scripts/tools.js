const action = process.argv[2];
const toolName = process.argv[3];

const toolScripts = require(`./tools/${toolName}.js`);
toolScripts[action]();