var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.YIELD("1/10/2018", "11/20/2019", "3.75%", 90, 100, 4));