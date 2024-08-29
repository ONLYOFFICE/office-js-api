
const oWorksheet = Api.GetActiveSheet(); 
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.NA();
oWorksheet.GetRange("C3").SetValue(result);
