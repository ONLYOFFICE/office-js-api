// This example shows how to return the year of a date, an integer in the range 1900-9999.

// How to return the year of a date.

// Use a function to get a year from a date object.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.YEAR("3/16/2018");

oWorksheet.GetRange("C1").SetValue(ans);
