// This example shows how to return the rank of a number in a list of numbers: its size relative to other values in the list.

// How to estimate the rank of a number in a list of numbers.

// Use a function to estimate rank of the a number from the list.

const oWorksheet = Api.GetActiveSheet();

var valueArr = [7,6,5,5];

// Place the numbers in cells

for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
var number = oWorksheet.GetRange("A3");
var range = oWorksheet.GetRange("A1:A4");
var order = 0;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.RANK(number,range,order); 

oWorksheet.GetRange("C1").SetValue(ans);
