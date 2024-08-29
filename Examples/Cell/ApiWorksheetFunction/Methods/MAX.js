
const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var max = oFunction.MAX(123, 197, 46, 354, 67, 456);
oWorksheet.GetRange("C1").SetValue(max);
