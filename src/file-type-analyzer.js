'use strict'

const _ = require('lodash')
const glob = require('glob')
const minimatch = require('minimatch')
const path = require('path')
const config = require('./config')

const exclusions = config.exclusions
const fileTypes = config.fileTypes

class FileTypeAnalyzer {
    constructor(directory) {
        this.directory = directory
    }

    analyze() {
        fileTypes.forEach(
            (fileType) => this.getFilesByType(fileType))
    }

    getFilesByType(fileType) {
        glob(fileType.pattern, {cwd: this.directory}, (errors, files) =>
            this.processExclusions(errors, files, fileType, this.directory))
    }

    processExclusions(error, files, fileType) {
        exclusions.forEach((exclusion) => {
            _.remove(files, (file) => {
                return minimatch(file, exclusion.pattern)
            })
        })

        let format =
            `${path.basename(this.directory)} - ${fileType.name} File Count:`

        console.log(format, files.length)
    }
}

module.exports = FileTypeAnalyzer
