'use strict'

const FileTypeAnalyzer = require('./file-type-analyzer')
const config = require('./config')

const directories = config.directories

directories.forEach((directory) => {
    let analyzer = new FileTypeAnalyzer(directory)
    analyzer.analyze()
})
