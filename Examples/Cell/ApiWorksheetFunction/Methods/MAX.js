// This example shows how to return the largest value in a set of values. Ignores logical values and text.
// How to get a maximum number from a list of numbers.
// Use a function to find a maximum from a list.
const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var max = oFunction.MAX(123, 197, 46, 354, 67, 456);
oWorksheet.GetRange("C1").SetValue(max);
