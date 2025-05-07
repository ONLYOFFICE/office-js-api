// This example shows how to return statistics that describe an exponential curve matching known data points.

// How to get the statistics of exponential curve matching the data points.

// Use a function to return the statistics of exponential curve matching the data points.

const worksheet = Api.GetActiveSheet();

//configure function parameters
let yValues = [1500, 1230, 1700, 1000, 980, 1470, 1560, 1640, 1420, 1100];
let xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let constant = true;
let stats = false;

//set values in cells
for (let i = 0; i < yValues.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(yValues[i]);
}
for (let i = 0; i < xValues.length; i++) {
  worksheet.GetRange("B" + (i + 1)).SetValue(xValues[i]);
}

//get x and y ranges
let yRange = worksheet.GetRange("A1:A10");
let xRange = worksheet.GetRange("B1:B10");

let func = Api.GetWorksheetFunction();
//invoke LOGEST method
let ans = func.LOGEST(yRange, xRange, constant, stats);

//print answer
worksheet.GetRange("D1").SetValue(ans);
