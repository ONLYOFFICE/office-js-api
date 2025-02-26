// This example shows how to return a normalised value from a distribution characterised by a mean and standard deviation.

// How to calculate the normalised value from a distribution.

// Use a function to get the normalised value from a distribution by different parameters.

const oWorksheet = Api.GetActiveSheet();

var valueArr = [5, -2, 10];

// Place the numbers in cells

for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

// method params

var x = oWorksheet.GetRange("A1");
var mean = oWorksheet.GetRange("A2");
var stdDev = oWorksheet.GetRange("A3");

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.STANDARDIZE(x, mean, stdDev);

oWorksheet.GetRange("C1").SetValue(ans);
