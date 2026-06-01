// Find the value for a given probability in a normal distribution in a spreadsheet.

// Calculate the inverse of cumulative probability with custom mean and standard deviation in a spreadsheet.

// Determine the threshold value corresponding to a percentile in a spreadsheet.

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
let inv = func.NORMINV(probability, mean, standardDeviation);
worksheet.GetRange("C1").SetValue(inv);