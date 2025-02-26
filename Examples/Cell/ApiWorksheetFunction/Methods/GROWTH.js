// This example shows how to calculate predicted exponential growth by using existing data.

// How to calculate predicted exponential growth by using existing data.

// Use a function to calculate predicted exponential growth.

const oWorksheet = Api.GetActiveSheet();

// Configure function parameters

var data_array = [1289, 1590, 1652, 1107, 903]; 
var months_array = [1, 2, 3, 4, 5]

// Set data_array and months_array in cells

for (var i = 0; i < months_array.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(months_array[i]);
}
for (var i = 0; i < data_array.length; i++) {
  oWorksheet.GetRange("B" + (i + 1)).SetValue(data_array[i]);
  oWorksheet.GetRange("B" + (i + 1)).SetNumberFormat("$#,##0.00");
}

// Get the ranges for data_array and bins_array

var data_arrayRange = oWorksheet.GetRange("A1:A5");
var months_arrayRange = oWorksheet.GetRange("B1:B5");

// Get the worksheet function object

var oFunction = Api.GetWorksheetFunction();

// Ensure the ranges are properly passed to the function

var growth = oFunction.GROWTH(data_arrayRange, months_arrayRange);

// Print the growth result

oWorksheet.GetRange("D1").SetValue(growth);
