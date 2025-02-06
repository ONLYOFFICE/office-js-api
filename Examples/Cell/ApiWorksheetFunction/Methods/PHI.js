// This example shows how to return the value of the density function for a standard normal distribution.
// How to return the value of the density function.
// Use a function to claculate the value of the density function.
const oWorksheet = Api.GetActiveSheet();

//method params
var number = 5;

oWorksheet.GetRange("A1").SetValue(number);

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.PHI(number);

oWorksheet.GetRange("C1").SetValue(ans);
