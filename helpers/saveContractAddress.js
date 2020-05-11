const { outputFile } = require('fs-extra');
module.exports = (name, address) => {
    return outputFile(
        `${process.cwd()}/deployments/${name}.js`,
        `module.exports = "${address}";`
    );
};