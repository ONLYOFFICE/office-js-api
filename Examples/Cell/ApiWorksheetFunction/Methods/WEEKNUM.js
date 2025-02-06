// This example shows how to return a number from 1 to 7 identifying the day of the week of the specified date.
// How to return a weekday.
// Use a function to get a weekday using numbers.
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.WEEKNUM("11/5/2018", 2); 

oWorksheet.GetRange("C1").SetValue(ans);
