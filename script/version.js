const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');
const dayjs = require('dayjs');
const version = dayjs().format('YY.MM.DD');
packageJson.version = version;

fs.writeFileSync(path.resolve(__dirname, '../package.json'), JSON.stringify(packageJson, null, 2));
