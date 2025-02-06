// This example shows how to return the inverse of the normal cumulative distribution for the specified mean and standard deviation.
// How to calculate the inverse of the normal cumulative distribution.
// Use a function to get the inverse of the normal cumulative distribution with a mean and standard deviation.
const oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange("A1").SetValue(0.6);

//method params
var value = oWorksheet.GetRange("A1").GetValue();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.NORMSDIST(value);

oWorksheet.GetRange("C1").SetValue(ans);
