const fs = require('fs');

const services = {};

services.readData = () => new Promise((resolve, reject) => {
    fs.readFile('./data.json', (error, data) => {
        if (error) {
            console.error(error);
            return reject(error);
        }

        resolve(data);
    })
});

module.exports = services;
