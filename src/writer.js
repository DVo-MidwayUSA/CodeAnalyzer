'use strict'

const fs = require('fs')
const csv = require('fast-csv')
const config = require('./config')

const output = config.output

class Writer {
    constructor() {
        this.file = output
    }

    append(data) {
        let content = fs.readFileSync(this.file, 'utf8')
        console.log(content)
        console.log(data)
        fs.writeFileSync(this.file, content)
    }
}

module.exports = Writer
