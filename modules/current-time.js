function currentTime() {
    const date = new Date();
    console.log(date.getHours());
    console.log(date.getSeconds());
    console.log(date.getMilliseconds());
}

module.exports.currentTime = currentTime;