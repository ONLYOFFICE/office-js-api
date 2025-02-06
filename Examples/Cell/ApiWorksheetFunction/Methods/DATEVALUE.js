// This example shows how to convert a date in the form of text to a number that represents the date in the date-time code.
// How to convert a date from the form of text.
// Use function to get the date from a text.
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.DATEVALUE("2018-3-16"); 

oWorksheet.GetRange("C1").SetValue(ans);
