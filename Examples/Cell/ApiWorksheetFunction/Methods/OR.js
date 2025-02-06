// This example shows how to check whether any of the arguments are true. Returns false only if all arguments are false.
// How to use OR logical operator.
// Use a function to apply OR operation.
const oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange("A1").SetValue(12);

var logical1 = oWorksheet.GetRange("A1") < 10;
var logical2 = 34 < 10;
var logical3 = 50 < 10;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.OR(logical1, logical2, logical3);
oWorksheet.GetRange("C1").SetValue(ans);
