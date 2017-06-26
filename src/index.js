'use strict';

const FileTypeAnalyzer = require('./analyzer');
const config = require('./config');
const Writer = require('./writer');


const directories = config.directories;

directories.forEach((directory) => {
    let analyzer = new FileTypeAnalyzer(directory);
    analyzer.analyze()
        .then((results) => {
            console.log(results);
        });
});
