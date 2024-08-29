
const oWorksheet = Api.GetActiveSheet();

// Set the formula in cell B3
oWorksheet.GetRange("B3").SetValue("=SUM(5, 6)");

// Check if there is a formula in C3
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.ISFORMULA(oWorksheet.GetRange("B3"));
oWorksheet.GetRange("C3").SetValue(result);
