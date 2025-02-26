// This example shows how to return the year fraction representing the number of whole days between the start date and end date.

// How to return the year fraction.

// Use a function to calculate a year fraction.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.YEARFRAC("12/7/1981", "11/5/2018");

oWorksheet.GetRange("C1").SetValue(ans);
