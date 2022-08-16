const {readFile} = require('fs')
const util= require('util') //for later

const getText = (path) => {
    return new Promise((resolve,reject) => {
        readFile(path, 'utf8', (err,data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
}

const start = async () => {
    try {
        const content1 = await getText('./content/first.txt');
        const content2 = await getText('./content/second.txt');
        console.log(content1)
        console.log(content2)
    } catch (error) {
        console.log(error);
    }
}

start()

// getText('./content/second.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))

