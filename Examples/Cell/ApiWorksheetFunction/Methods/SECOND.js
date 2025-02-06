// This example shows how to return the second, a number from 0 to 59.
// How to get seconds from time.
// Use a function to return seconds from time object.
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.SECOND("16:39:35"); 

oWorksheet.GetRange("C1").SetValue(ans);
