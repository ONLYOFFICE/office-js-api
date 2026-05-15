// Calculate the negative binomial distribution probability in a spreadsheet.

// Find the likelihood of failures before success using distribution analysis in a spreadsheet.

// Determine failure probability in repeated trials within a spreadsheet.

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

let func = Api.WorksheetFunction;
let ans = func.NEGBINOMDIST(numberF, numberS, probabilityS);

worksheet.GetRange("C1").SetValue(ans);