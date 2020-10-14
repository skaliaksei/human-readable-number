module.exports = function toReadable (number) {
    const onesArray = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tensArray = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundredsArray = ['', 'hundred'];
  let wordsArray = numToArray(number);

  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] >= 100) {
      wordsArray[i] = hundredsArray[wordsArray[i] / 100];
    } else if (wordsArray[i] >= 20 && wordsArray[i] < 100) {
      wordsArray[i] = tensArray[wordsArray[i] / 10];
    } else if (wordsArray[i] >= 1 && wordsArray[i] < 20) {
      wordsArray[i] = onesArray[wordsArray[i]];
    } else {
      wordsArray[i] = 'zero';
    }
  }

  return wordsArray.join(' ');
}

function numToArray(innerNum) {
    let arrNums = new Array();

    if(String(innerNum).length === 3) {
      arrNums[0] = 0;
      arrNums[1] = 100;
      arrNums[0] = Math.floor(innerNum / 100);
      innerNum = innerNum - (arrNums[0] * arrNums[1]);
        if (innerNum > 20 && innerNum % 10 != 0 && innerNum % 100 != 0) {
          arrNums[2] = (Math.floor(innerNum / 10)) * 10;
          arrNums[3] = innerNum - arrNums[2];
        } else if (innerNum % 100 != 0) {
          arrNums[2] = innerNum;
        }
    } else if(String(innerNum).length === 2) {
      if (innerNum > 20 && innerNum % 10 != 0) {
          arrNums[0] = (Math.floor(innerNum / 10)) * 10;
          arrNums[1] = innerNum - arrNums[0];
        } else {
          arrNums[0] = innerNum;
        }
    } else { // === '1'
      arrNums[0] = innerNum;
    }

    return arrNums;
  }

