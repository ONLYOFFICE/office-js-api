var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ACCRINT("1/1/2018", "6/25/2018", "10/15/2018", "3.50%", 1000, 2));