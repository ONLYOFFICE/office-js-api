var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ISNUMBER("#N/A"));
oWorksheet.GetRange("A2").SetValue(oFunction.ISNUMBER(255));
oWorksheet.GetRange("A3").SetValue(oFunction.ISNUMBER("Online Office"));