// This example shows how to return the inverse of the standard normal cumulative distribution (has a mean of zero and a standard deviation of one).

// How to calculate the inverse of the standard normal cumulative distribution.

// Use a function to get the inverse of the standard normal cumulative distribution.

const oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange("A1").SetValue(0.25);

//method params
var value = oWorksheet.GetRange("A1").GetValue();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.NORMSINV(value);

oWorksheet.GetRange("C1").SetValue(ans);
