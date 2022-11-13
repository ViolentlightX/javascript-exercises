const sumAll = function(start, end) {
    let sumNum = 0;
    let difNum = 0;
    if(start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';
    if(start > end) {
        difNum = start - end;
        for(i = 0; i <= difNum; i++) {
            sumNum += end + i;
        }
    } else {
        difNum = end - start;
        for(i = 0; i <= difNum; i++) {
            sumNum += start + i;
        }
    }
    return sumNum;
};

// Do not edit below this line
module.exports = sumAll;
