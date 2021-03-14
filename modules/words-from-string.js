function wordsFromString(str) {
    str.split(' ').forEach(word => {
        if (!/[^a-zA-Z]/g.test(word)) {
            console.log(word);
        }
    });
}

module.exports.wordsFromString = wordsFromString;