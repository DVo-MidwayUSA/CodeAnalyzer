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
        this.results = [];
    }

    analyze() {
        let promise = new Promise((resolve, reject) => {
        fileTypes.forEach(
            (fileType) => this.getFilesByType(fileType));

        });
        return deferred.promise;
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

        let result = {
            'Project': path.basename(this.directory),
            'File Type': fileType.name,
            'Count': files.length,
        };

        this.results.push(result);
        deferred.resolve(this.results);
    }
}

module.exports = Analyzer;
