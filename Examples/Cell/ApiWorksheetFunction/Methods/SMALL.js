// This example shows how to return the k-th smallest value in a data set. For example, the fifth smallest number.

// How to return the k-th smallest value from data set.

// Use a function to get the smallest value from data set indicated.

const oWorksheet = Api.GetActiveSheet();

var valueArr = [1, 0, 0, 0, 0, 1, 0, 0, 2, 3, 4, 5, 6, 8, 10, 12];

// Place the numbers in cells

for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

// method params

var range = oWorksheet.GetRange("A1:A16");
var position = 8;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.SMALL(range, position);

oWorksheet.GetRange("C1").SetValue(ans);
