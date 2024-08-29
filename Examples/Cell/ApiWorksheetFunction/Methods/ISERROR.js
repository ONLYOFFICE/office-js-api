
const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("B3").SetValue("#N/A")
var result = oFunction.ISERR("B3");
oWorksheet.GetRange("C3").SetValue(result)
