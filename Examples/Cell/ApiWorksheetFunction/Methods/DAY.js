// This example shows how to return the day of the date given in the numerical format, a number from 1 to 31.

// How to get a day from a date.

// Use function to get day from provided date.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.DAY("2018/3/16"); 

oWorksheet.GetRange("C1").SetValue(ans);
