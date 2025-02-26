// This example shows how to test whether a number is greater than a threshold value. The function returns 1 if the number is greater than or equal to the threshold value and 0 otherwise.

// How to compare a number with a threshold value.

// Use a function to find out whether a value greater than a limit.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.GESTEP(-2, 2));