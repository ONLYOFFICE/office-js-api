// This example shows how to return the number of whole workdays between two dates.

// How to get the number of whole workdays between two dates.

// Use a function to get number of days between two dates.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.NETWORKDAYS("3/16/2018", "12/31/2018"); 

oWorksheet.GetRange("C1").SetValue(ans);
