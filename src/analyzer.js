'use strict';

const _ = require('lodash');
const glob = require('glob');
const minimatch = require('minimatch');
const path = require('path');
const config = require('./config');

const exclusions = config.exclusions;
const fileTypes = config.fileTypes;

class Analyzer {
    constructor(directory) {
        this.directory = directory;
        this.result = [];
    }

    analyze() {
        fileTypes.forEach(
            (fileType) => this.getFilesByType(fileType));
    }

    getFilesByType(fileType) {
        glob(fileType.pattern, {cwd: this.directory}, (errors, files) =>
            this.processExclusions(errors, files, fileType));
    }

    processExclusions(error, files, fileType) {
        exclusions.forEach((exclusion) => {
            _.remove(files, (file) => {
                return minimatch(file, exclusion.pattern);
            });
        });

        this.result.push(`${path.basename(this.directory)} - ${fileType.name} File Count: ${files.length}`);
        console.log(this.result);
    }
}

module.exports = Analyzer;
