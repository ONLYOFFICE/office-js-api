var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ACCRINTM("1/1/2018", "10/15/2018", "3.50%", 1000, 1));