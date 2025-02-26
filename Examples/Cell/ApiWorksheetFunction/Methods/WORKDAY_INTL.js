// This example shows how to return the serial number of the date before or after a specified number of workdays with custom weekend parameters.

// How to return the serial number of the date adding some workdays.

// Use a function to calculate the serial number of the date.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.WORKDAY_INTL("9/8/2017", "-20", "0000011", "8/15/2017");

oWorksheet.GetRange("C1").SetValue(ans);
