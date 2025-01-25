const worksheet = Api.GetActiveSheet();

let numbersArr = [4, 13, 27, 56, 46, 79, 22, 12];

// Place the numbers in cells
for (let i = 0; i < numbersArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

let func = Api.GetWorksheetFunction();
let range = worksheet.GetRange("A1:A8");
let largePostion = 4;
let kLargest = func.LARGE(range, largePostion);
worksheet.GetRange("C1").SetValue(kLargest);
