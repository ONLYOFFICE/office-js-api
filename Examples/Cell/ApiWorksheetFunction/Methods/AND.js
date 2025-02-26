// This example shows how to check whether all conditions in a test are true.

// How to apply logical AND operation for a list of conditions.

// Use logical AND to evaluate an expression.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.AND(12 < 100, 34 < 100, 50 < 100); //AND logical function

oWorksheet.GetRange("C1").SetValue(ans);
