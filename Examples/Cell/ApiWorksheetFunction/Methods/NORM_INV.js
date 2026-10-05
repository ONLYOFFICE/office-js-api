// Calculate the inverse of the normal distribution for a given mean and standard deviation in a spreadsheet.

// How do I find the value for a probability in a normal distribution in a spreadsheet?

// Get the quantile value for a specific probability with custom mean and standard deviation in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let valueArr = [0.34, 7, 3];
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}
let probability = worksheet.GetRange("A1").GetValue();
let mean = worksheet.GetRange("A2").GetValue();
let standardDeviation = worksheet.GetRange("A3").GetValue();
let func = Api.WorksheetFunction;
let inv = func.NORM_INV(probability, mean, standardDeviation);
worksheet.GetRange("C1").SetValue(inv);