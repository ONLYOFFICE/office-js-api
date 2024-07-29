// This example shows how to get a formula of the specified range.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B1").SetValue(1);
oWorksheet.GetRange("C1").SetValue(2);
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("=SUM(B1:C1)");
var sFormula = oRange.GetFormula();
oWorksheet.GetRange("A3").SetValue("Formula from cell A1: " + sFormula);