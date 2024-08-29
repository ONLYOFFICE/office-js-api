const oWorksheet = Api.GetActiveSheet();

let numbersArr = [4, 13, 27, 56, 46, 79, 22, 12];

// Place the numbers in cells
for (let i = 0; i < numbersArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

let oFunction = Api.GetWorksheetFunction();
let oRange = oWorksheet.GetRange("A1:A8");
let largePostion = 4;
let kLargest = oFunction.LARGE(oRange, largePostion);
oWorksheet.GetRange("C1").SetValue(kLargest);
