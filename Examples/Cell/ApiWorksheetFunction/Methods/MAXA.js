
const oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:A5").GetValue();
var oFunction = Api.GetWorksheetFunction();
var maxA = oFunction.MAX(23, 45, true, "text", 0.89);
oWorksheet.GetRange("C1").SetValue(maxA);
