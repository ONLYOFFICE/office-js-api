var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ISTEXT(255));
oWorksheet.GetRange("A2").SetValue(oFunction.ISTEXT("#N/A"));
oWorksheet.GetRange("A3").SetValue(oFunction.ISTEXT("Online Office"));