// This example shows how to return the number of whole workdays between two dates with custom weekend parameters.
// How to get the number of whole dates with parameters.
// Use a function to get number of days between two dates.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.NETWORKDAYS_INTL("8/1/2017", "9/1/2017", "0000011", "8/16/2017"));