// This example shows how to return the inverse of the normal cumulative distribution for the specified mean and standard deviation.

// How to calculate the inverse of the normal cumulative distribution.

// Use a function to get the inverse of the normal cumulative distribution.

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