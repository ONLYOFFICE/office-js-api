// This example shows how to return the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value.

// How to return the minimum value for which the cumulative binomial distribution >= criterion value.

// Use function to the minimum value for which the cumulative binomial distribution >= criterion value.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.CRITBINOM(678, 0.1, 0.007);
oWorksheet.GetRange("B2").SetValue(ans);