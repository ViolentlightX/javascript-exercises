const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let compString = '';
    for (i = 0;i < num;i++) {
        compString += string;
    }
    return compString;
};

// Do not edit below this line
module.exports = repeatString;
