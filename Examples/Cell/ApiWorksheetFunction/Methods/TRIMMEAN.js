// This example shows how to return the mean of the interior portion of a set of data values.

// How to delete the mean of the data values interior portion.

// Use a function to remove the mean from the interior portion of a set of data values.

var oWorksheet = Api.GetActiveSheet();
var argumentsArr = [1, 2, 3, 4];

// Place the numbers in cells

for (var i = 0; i < argumentsArr.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(argumentsArr[i]);
}

// Get values from the range

var data = oWorksheet.GetRange("A1:A4");

// Calculate the TRIMMEAN of the range A1:A6

var oFunction = Api.GetWorksheetFunction();
var result = oFunction.TRIMMEAN(data, 0.6);
oWorksheet.GetRange("B1").SetValue(result);
