function charOneSecondOutput(str) {
    // const arr = str.split();
    let index = 0;
    const interval = setInterval(function() {
        if (index >= str.length - 1) {
            //arr.length === 0) {
            clearInterval(interval);
        }
        // console.log(arr.shift());
        console.log(str[index]);
        index++;
    }, 1000);
}

module.exports.charOneSecondOutput = charOneSecondOutput;