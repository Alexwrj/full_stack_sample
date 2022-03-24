const fs = require('fs');

const services = {};

services.readData = () => new Promise((resolve, reject) => {
    fs.readFile('./data.json', 'utf-8', (error, data) => {
        if (error) {
            console.error(error);
            return reject(error);
        }

        resolve(JSON.parse(data));
    })
});

module.exports = services;
