var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TYPE(255));
oWorksheet.GetRange("A2").SetValue(oFunction.TYPE(true));
oWorksheet.GetRange("A3").SetValue(oFunction.TYPE("Online Office"));