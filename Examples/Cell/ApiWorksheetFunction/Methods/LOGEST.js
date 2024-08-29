
const oWorksheet = Api.GetActiveSheet();

//configure function parameters
var yValues = [1500, 1230, 1700, 1000, 980, 1470, 1560, 1640, 1420, 1100];
var xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var constant = true;
var stats = false;

//set values in cells
for (var i = 0; i < yValues.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(yValues[i]);
}
for (var i = 0; i < xValues.length; i++) {
  oWorksheet.GetRange("B" + (i + 1)).SetValue(xValues[i]);
}

//get x and y ranges
var yRange = oWorksheet.GetRange("A1:A10");
var xRange = oWorksheet.GetRange("B1:B10");

var oFunction = Api.GetWorksheetFunction();
//invoke LOGEST method
var ans = oFunction.LOGEST(yRange, xRange, constant, stats);

//print answer
oWorksheet.GetRange("D1").SetValue(ans);
