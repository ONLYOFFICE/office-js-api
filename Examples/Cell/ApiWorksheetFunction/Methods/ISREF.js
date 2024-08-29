var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ISREF("A3"));
oWorksheet.GetRange("A2").SetValue(oFunction.ISREF(oWorksheet.GetRange("A3")));