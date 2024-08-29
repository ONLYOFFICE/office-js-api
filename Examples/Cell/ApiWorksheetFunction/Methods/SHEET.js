
const oWorksheet = Api.GetActiveSheet(); 
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.SHEET("Sheet1");
oWorksheet.GetRange("C3").SetValue(result);
