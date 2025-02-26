// This example shows how to сheck if the specified logical value is true or false. The function returns true if the argument is false and false if the argument is true.

// How to negate a boolean value.

// Use a function to get the opposite of the boolean value.

const oWorksheet = Api.GetActiveSheet();

var condition = 12 < 100;
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.NOT(condition);

oWorksheet.GetRange("C1").SetValue(ans);
