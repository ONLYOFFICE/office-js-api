var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.YIELDMAT("1/10/2018", "11/20/2019", "1/1/2017", "6.00%", 90));