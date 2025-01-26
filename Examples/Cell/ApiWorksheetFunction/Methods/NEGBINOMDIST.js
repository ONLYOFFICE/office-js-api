
const worksheet = Api.GetActiveSheet();

let valueArr = [6, 32, 0.7];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
let numberF = worksheet.GetRange("A1").GetValue();
let numberS = worksheet.GetRange("A2").GetValue();
let probabilityS = worksheet.GetRange("A3").GetValue();

let func = Api.GetWorksheetFunction();
let ans = func.NEGBINOMDIST(numberF, numberS, probabilityS);

worksheet.GetRange("C1").SetValue(ans);
