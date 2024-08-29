var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.INTRATE("1/1/2018", "11/12/2018", 1000, 1050, 2));