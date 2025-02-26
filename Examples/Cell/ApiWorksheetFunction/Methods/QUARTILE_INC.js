// This example shows how to return the quartile of a data set, based on percentile values from 0..1, inclusive.

// How to get the inclusive quartile of a data set.

// Use a function to calculate an inclusive fourth part of a data set.

const oWorksheet = Api.GetActiveSheet();

var valueArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var quart = 1;

// Place the numbers in cells

for (var i = 0; i < valueArr1.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr1[i]);
}

//method params
var array = oWorksheet.GetRange("A1:A12");

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.QUARTILE_INC(array, quart); //0...1 inclusive

oWorksheet.GetRange("C1").SetValue(ans);
