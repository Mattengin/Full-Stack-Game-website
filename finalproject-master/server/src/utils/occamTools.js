let scaleArray = (startIndex, amountToCut, arrayToScale = []) => {
  
    return arrayToScale.splice(startIndex, amountToCut);
}


module.exports = {
    scaleArray: scaleArray
};