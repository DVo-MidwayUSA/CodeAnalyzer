'use strict'

const _ = require('lodash')
const glob = require('glob')
const minimatch = require('minimatch')

const exclusions = [
    {name: 'jQuery', pattern: '**/jQuery/**'},
    {name: 'Node Modules', pattern: 'node_modules/**'},
    {name: 'Obj', pattern: 'obj/**'},
    {name: 'Bin', pattern: 'bin/**'},
    {name: 'App_Data', pattern: 'bin/**'},
    {name: 'App_GlobalResources', pattern: 'bin/**'},
]

const fileTypes = [
    {name: 'C#', pattern: '**/*.cs'},
    {name: 'JavaScript', pattern: '**/*.js'},
    {name: 'CSHTML', pattern: '**/*.cshtml'},
    {name: 'HTML', pattern: '**/*+(.html|*.htm)'},
]

class FileTypeAnalyzer {
    constructor(directory) {
        process.chdir(directory)
    }

    analyze() {
        fileTypes.forEach((fileType) => {
            glob(fileType.pattern, (error, files) => {
                exclusions.forEach((exclusion) => {
                    _.remove(files, (file) => {
                        return minimatch(file, exclusion.pattern)
                    })
                })

                console.log(`${fileType.name} File Count:`, files.length)
            })
        })
    }
}

module.exports = FileTypeAnalyzer
