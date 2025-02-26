// This example shows how to return the inverse of the normal cumulative distribution for the specified mean and standard deviation.

// How to calculate the inverse of the normal cumulative distribution.

// Use a function to get the inverse of the normal cumulative distribution.

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
var inv = oFunction.NORMINV(probability, mean, standardDeviation);
oWorksheet.GetRange("C1").SetValue(inv);
