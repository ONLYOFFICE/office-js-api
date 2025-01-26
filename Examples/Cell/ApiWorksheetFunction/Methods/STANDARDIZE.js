
const worksheet = Api.GetActiveSheet();

let valueArr = [5, -2, 10];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

// method params
let x = worksheet.GetRange("A1");
let mean = worksheet.GetRange("A2");
let stdDev = worksheet.GetRange("A3");

let func = Api.GetWorksheetFunction();
let ans = func.STANDARDIZE(x, mean, stdDev);

worksheet.GetRange("C1").SetValue(ans);
