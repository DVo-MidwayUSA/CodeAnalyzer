'use strict'

const FileTypeAnalyzer = require('./file-type-analyzer')

const directories = [
    'C:\\Workspaces\\TFS15\\Website\\Master\\WWW\\WWW.Web',
]

directories.forEach((directory) => {
    let analyzer = new FileTypeAnalyzer(directory)
    analyzer.analyze()
})
