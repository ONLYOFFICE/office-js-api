// Calculate standard normal distribution probability in a spreadsheet.

// Find cumulative probability using the standard normal curve in a spreadsheet.

// Determine statistical likelihood for standardized values in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let valueArr = [0.34, 7, 3];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
let probability = worksheet.GetRange("A1").GetValue();
let mean = worksheet.GetRange("A2").GetValue();
let standardDeviation = worksheet.GetRange("A3").GetValue();

let func = Api.WorksheetFunction;
let inv = func.NORM_INV(probability, mean, standardDeviation);
worksheet.GetRange("C1").SetValue(inv);