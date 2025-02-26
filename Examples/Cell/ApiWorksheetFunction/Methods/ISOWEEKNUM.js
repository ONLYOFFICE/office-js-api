// This example shows how to return the ISO week number in the year for a given date. 

// How to get the ISO week number.

// Use a function to get an ISO week number in the year.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.ISOWEEKNUM("9/1/2017"); 

oWorksheet.GetRange("C1").SetValue(ans);
