// This example shows how to return the month, a number from 1 (January) to 12 (December).
// How to get the month from a date.
// Use a function to get a month.
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.MONTH("3/16/2018"); 

oWorksheet.GetRange("C1").SetValue(ans);
