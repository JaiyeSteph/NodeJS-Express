// modules - Encapsulated Code (Only share minimum)
// commonJS, every file is module (by default)

const names = require('./names')
const sayHi = require('./utils')



sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
