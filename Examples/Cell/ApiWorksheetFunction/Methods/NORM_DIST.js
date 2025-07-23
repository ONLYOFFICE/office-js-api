// This example shows how to return the normal distribution for the specified mean and standard deviation.

// How to calculate the normal distribution.

// Use a function to get the normal distribution knowing the mean and standard deviation.

const worksheet = Api.GetActiveSheet();
let valueArr = [36, 6, 7, false];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
let x = worksheet.GetRange("A1").GetValue();
let mean = worksheet.GetRange("A2").GetValue();
let standardDeviation = worksheet.GetRange("A3").GetValue();
let cumulative = worksheet.GetRange("A4").GetValue();
let func = Api.WorksheetFunction;
let normalDist = func.NORM_DIST(x, mean, standardDeviation, cumulative);
worksheet.GetRange("C1").SetValue(normalDist);