// 5.Գրել ծրագիր որ աշխատացնելիս sync կկարադա նախորդ չորս տնայիների ֆայլերի պարունակությունը(Օրինակ homework1.js, homework2.js, homework3.js, homework4.js): 
// Այնուհետև ծրագիրը պետք է ստեղծի txt ֆայլ, որի անուն կազմված կլնի օպերացոն համակարգի անունից և այդ պահին ժամ րոպե վարկյանից(win32_14_14_58.txt)   
// և այդ ֆայլում գրել նախորդ ֆայլերի պարունակությունը:
const fs = require('fs');
const os = require('os');

const dateNow = new Date();
const nameOfFile = `${os.platform()} _ ${dateNow.getHours()}_${dateNow.getMinutes()}_${dateNow.getSeconds()}.txt`;

const task1 = fs.readFileSync('./task-1.js');
const task2 = fs.readFileSync('./task-2.js');
const task3 = fs.readFileSync('./task-3.js');
const task4 = fs.readFileSync('./task-4.js');

fs.writeFileSync(nameOfFile, task1 + task2 + task3 + task4);