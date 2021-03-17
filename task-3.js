// 3.Գրել ծրագիր որը աշխատացնելիս կստեղծի 8 նիշանոց պատահական թվերից կազմված անուն ունեցող txt ֆայլ և այդ ֆայի մեջ Օպերացիան համակարգի 
//central processing unit (CPU) քանակը(os.cpus()):
const os = require('os');
const fs = require('fs');
const random = require('random');

const name = random.integer(1e7, 1e8);
fs.writeFile(name + '.txt', os.cpus().length.toString(), (err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('OK');
})