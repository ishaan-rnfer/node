const {writeFileSync} = require('fs')
for(let i = 0; i < 10000; i++) {
    writeFileSync('./content/big.txt', `hello ${i} time\n`, 
    { flag: 'a' })
}