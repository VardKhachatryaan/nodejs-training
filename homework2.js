const random = require('random');
const fs = require('fs');
// 1.  Գրել ծրագիր որը աշխատացնելիս console-ում կարտածի ամբողջ օպերատիվ հիշողությունը (total amount of system memory):
const os = require('os');

console.log(os.totalmem());

// 2. Գրել ծրագիր որ աշխատացնելիս console-ում կարտածի IPv4 IP հասցեն(os.networkInterfaces()):
console.log(os.networkInterfaces('IPv4'));

// 3.Գրել ծրագիր որը աշխատացնելիս կստեղծի 8 նիշանոց պատահական թվերից կազմված անուն ունեցող txt ֆայլ և այդ ֆայի մեջ Օպերացիան համակարգի central processing unit (CPU) քանակը(os.cpus()):
// let name = random.int(0, 9) * 8;
// console.log(name);

// const data = os.cpus().toString();
// fs.writeFileSync('51542894.txt', data);


// 4.Գրել ծրագիր որ աշխատացնելիս  input.txt կկարդա պարունակությունը , որից հետո այդ պարունակության բոլոր բացատները կփոխարին - ներով: Այնուհետև գծիկներով տեքստ գրել write.txt ֆայլում:
fs.writeFileSync('input.txt', "Some text for homework2");

let changedText = fs.readFileSync('./input.txt', 'utf-8');
changedText = changedText.split(' ').join('-');

fs.writeFileSync('write.txt', changedText);

// 5.Գրել ծրագիր որ աշխատացնելիս sync կկարադա նախորդ չորս տնայիների ֆայլերի պարունակությունը(Օրինակ homework1.js, homework2.js, homework3.js, homework4.js): 
// Այնուհետև ծրագիրը պետք է ստեղծի txt ֆայլ, որի անուն կազմված կլնի օպերացոն համակարգի անունից և այդ պահին ժամ րոպե վարկյանից(win32_14_14_58.txt)   
// և այդ ֆայլում գրել նախորդ ֆայլերի պարունակությունը: