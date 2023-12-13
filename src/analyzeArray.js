const analyzeArray = (inputArr) => {
    const newObj = {}; 
    newObj.average = inputArr.reduce((current, total) => {
        return total += current
    }, 0) / inputArr.length; 
    newObj.min = Math.min(...inputArr);
    newObj.max = Math.max(...inputArr);
    newObj.length = inputArr.length;
    // console.log(newObj)
    return newObj
}

// analyzeArray([1,8,3,4,2,6])
export { analyzeArray };