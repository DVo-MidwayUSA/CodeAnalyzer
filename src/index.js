'use strict';

const FileTypeAnalyzer = require('./analyzer');
const config = require('./config');

const directories = config.directories;

// directories.forEach((directory) => {
//     let analyzer = new FileTypeAnalyzer(directory)
//     analyzer.analyze()
// })

const Writer = require('./writer');

let writer = new Writer();
writer.append('hello');
