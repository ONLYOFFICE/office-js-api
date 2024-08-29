var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PRICE("1/1/2017", "6/1/2019", 0.05, 0.09, 105, 2));