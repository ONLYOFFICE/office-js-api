
const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var nonPositiveNum = 0;
var logResult = oFunction.LOG(nonPositiveNum);
oWorksheet.GetRange("B3").SetValue(logResult);
oWorksheet.GetRange("C3").SetValue(oFunction.ERROR_TYPE(logResult));
