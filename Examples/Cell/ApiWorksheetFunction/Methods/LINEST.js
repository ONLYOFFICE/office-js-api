// Fit a straight line to data points and get trend statistics in a spreadsheet.

// How do I analyze the relationship between x and y values to predict a trend in a spreadsheet?

// Get the slope, intercept, and accuracy metrics for a linear regression in a spreadsheet.

const worksheet = Api.GetActiveSheet();

//configure function parameters
let yValues = [1.5, 2, 3];
let xValues = [2, 3.1, 3.5];
let constant = true;
let stats = true;

//set values in cells
for (let i = 0; i < yValues.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(yValues[i]);
}
for (let n = 0; n < xValues.length; n++) {
  worksheet.GetRange("B" + (n + 1)).SetValue(xValues[n]);
}

//get x and y ranges
let yRange = worksheet.GetRange("A1:A3");
let xRange = worksheet.GetRange("B1:B3");
let func = Api.WorksheetFunction;

//invoke LINEST method
let ans = func.LINEST(yRange, xRange, constant, stats);

//print answer 
 worksheet.GetRange("D1").SetValue(ans);
