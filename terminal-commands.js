const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc, file) => {
            return `${acc} ${file}`;
        }, '');
        console.log(filesToString);
    });
};

module.exports.touch = () => {
    fs.appendFile('newfile.txt', 'data to add', (err) => {
        if (err) throw err;
        console.log('Data added to file');
    });
};

module.exports.mkdir = () => {
    fs.mkdir('./', { recursive: true }, (err) => {
        if (err) throw err;
    });
};