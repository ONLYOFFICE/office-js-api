// This example shows how to return the median, or the number in the middle of the set of given numbers.
// How to get a median from the list.
// Use a function to get a value that located in the middle of the list.
const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var median = oFunction.MEDIAN(4,45,12,34,3,54,2,2);
oWorksheet.GetRange("C1").SetValue(median);


