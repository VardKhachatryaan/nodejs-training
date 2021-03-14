const random = require('random');
const currentTime = require('./modules/current-time.js');
const wordsFromString = require('./modules/words-from-string.js');
const charOneSecondOutput = require('./modules/char-one-second-output');
// 1. Ստեղծել homework1.js ֆայլ որը աշխատեցնելուց հետո __filename գլոբալի  միջոցով console-ում արտածել ֆայլի բացարձակ ճանապարը և  ճանապարհի անվան 
//երկարությունը
// console.log(_filename);
//console.log(_filename.length);



// 2. Ստեղծել package.json  ֆայլ որը կունենա  home2.jpg տեսքը, որտեղ author դիմաց կլինի Ձեր անուն ազգանունը:
// homework2.js ֆայլի միջոցով օգտագործելով random փաթեթը  console-ում արտածել 5 պատհական int արժեքներ 0 - 100 միջակայքում:
//const random = require('random');

for (let i = 0; i < 5; i++) {
    console.log(random.int(0, 100));
}



// 3. Modules պապակայում ստեղծել currentTime մոդուլ currentTime ֆունկցիայով որը արտածում է  կանչելու պահին ժամը, րոպեն ,վարկյանը և միլիվայրկյանը :
// Մոդուլը ներմուծել homework3.js ֆայլում և կանչել currentTime ֆունկցիավ  ու արդյունքը արտածել console-ում:

currentTime();


// 4.Modules պապակայում ստեղծել wordsFromString մոդուլ wordsFromString ֆունկցիայով որը տրված նախադասությունից console-ում  արտածում է այն բառերը 
//որոնք չունեն հատուկ սիմվոլ:Մոդուլը ներմուծել homework4.js ֆայլում և wordsFromString ֆունկցիավ կանչել որևէ նախադասության համար:  
wordsFromString('uygrf qiwfge! jwhefb5 WGFHB');



// 5.Modules պապակայում ստեղծել charOneSecondOutput մոդուլ charOneSecondOutput ֆունկցիայով որը console-ում  արտածում է ֆունկցիային տրված բառի
// տառերը 1 վայրկյան պարբերությամբ: 

// Մոդուլը ներմուծել homework5.js ֆայլում և charOneSecondOutput ֆունկցիա կանչել Ձեր անուն ազգանունից  կազմված բառակապակցության համար :

charOneSecondOutput();