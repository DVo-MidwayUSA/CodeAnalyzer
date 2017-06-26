'use strict';

const fs = require('fs');
const CsvWriter = require('csv-write-stream');
const config = require('./config');

const output = config.output;

class Writer {
    constructor() {
        this.file = output.location;
    }

    append(data) {
        this.writer = new CsvWriter(output.headers);
        this.writer.pipe(fs.createWriteStream(this.file, {flags: 'a'}));
        this.writer.write(data);
        this.writer.end();
    }
}

module.exports = Writer;
