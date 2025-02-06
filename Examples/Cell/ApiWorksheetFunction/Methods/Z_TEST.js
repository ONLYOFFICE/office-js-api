// This example shows how to return the one-tailed P-value of a z-test.
// How to return one-tailed P-value.
// Use a function to get one-tailed P-value.

var oWorksheet = Api.GetActiveSheet();
var argumentsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// Place the numbers in cells
for (var i = 0; i < argumentsArr.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(argumentsArr[i]);
}

// Get values from the range
var data = oWorksheet.GetRange("A1:A16");

// Calculate the TRIMMEAN of the range A1:A16
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.Z_TEST(data, 4);
oWorksheet.GetRange("B1").SetValue(result);

