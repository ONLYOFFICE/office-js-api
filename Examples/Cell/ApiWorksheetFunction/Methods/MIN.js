
const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var min = oFunction.MIN(123, 197, 46, 345, 67, 456);
oWorksheet.GetRange("C1").SetValue(min);
