// This example shows how to return the serial number of the date before or after a specified number of workdays.

// How to return the serial number of the date adding some workdays.

// Use a function to calculate the serial number of the date.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.WORKDAY("12/7/1981", 56); 

oWorksheet.GetRange("C1").SetValue(ans);
