
const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("B3").SetValue("45")
var result = oFunction.ISERROR("B3");
oWorksheet.GetRange("C3").SetValue(result)
