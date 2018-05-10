
const fs = require('fs')
const commitID = process.argv[2]
const _DIR_ = process.cwd()

fs.writeFileSync(`${_DIR_}/common/dynamicID.js`, `module.exports = '${commitID.substr(0,8)}'`)