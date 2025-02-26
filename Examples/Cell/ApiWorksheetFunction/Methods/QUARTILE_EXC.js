// This example shows how to return the quartile of a data set, based on percentile values from 0..1, exclusive.

// How to get the exclusive quartile of a data set.

// Use a function to calculate an exclusive fourth part of a data set.

const oWorksheet = Api.GetActiveSheet();

var valueArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var quart = 2; 

// Place the numbers in cells

for (var i = 0; i < valueArr1.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr1[i]);
}

//method params
var array = oWorksheet.GetRange("A1:A12");

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.QUARTILE_EXC(array, quart); //0...1 exclusive

oWorksheet.GetRange("C1").SetValue(ans);
