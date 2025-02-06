// This example shows how to return the standard normal cumulative distribution (has a mean of zero and a standard deviation of one).
// How to calculate the standard normal cumulative distribution.
// Use a function to get the standard normal cumulative distribution.
const oWorksheet = Api.GetActiveSheet();
var valueArr = [0.34, 7, 3];

// Place the numbers in cells
for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
var probability = oWorksheet.GetRange("A1").GetValue();
var mean = oWorksheet.GetRange("A2").GetValue();
var standardDeviation = oWorksheet.GetRange("A3").GetValue();

var oFunction = Api.GetWorksheetFunction();
var inv = oFunction.NORM_INV(probability, mean, standardDeviation);
oWorksheet.GetRange("C1").SetValue(inv);
