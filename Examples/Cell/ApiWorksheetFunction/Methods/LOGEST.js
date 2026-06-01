// Calculate statistics that describe an exponential curve for data points in a spreadsheet.

// How do I analyze the trend of exponentially growing data in a spreadsheet?

// Use curve statistics to predict future values based on exponential growth patterns in a spreadsheet.

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

let func = Api.WorksheetFunction;
//invoke LOGEST method
let ans = func.LOGEST(yRange, xRange, constant, stats);

//print answer
worksheet.GetRange("D1").SetValue(ans);