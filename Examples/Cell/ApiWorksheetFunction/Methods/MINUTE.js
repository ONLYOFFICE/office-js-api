// This example shows how to return the minute, a number from 0 to 59.

// How to get a minute from a time.

// Use a function to get minutes from a time object.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.MINUTE("4:25 pm"); 

oWorksheet.GetRange("C1").SetValue(ans);
