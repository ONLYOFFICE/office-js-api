// This example shows how to return the normal distribution for the specified mean and standard deviation.

// How to calculate the normal distribution.

// Use a function to get the normal distribution knowing the mean and standard deviation.

const oWorksheet = Api.GetActiveSheet();
var valueArr = [36, 6, 7, false];

// Place the numbers in cells

for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
var x = oWorksheet.GetRange("A1").GetValue();
var mean = oWorksheet.GetRange("A2").GetValue();
var standardDeviation = oWorksheet.GetRange("A3").GetValue();
var cumulative = oWorksheet.GetRange("A4").GetValue();
var oFunction = Api.GetWorksheetFunction();
var normalDist = oFunction.NORM_DIST(x, mean, standardDeviation, cumulative);
oWorksheet.GetRange("C1").SetValue(normalDist);
