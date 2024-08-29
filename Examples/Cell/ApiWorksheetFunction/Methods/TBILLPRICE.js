var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TBILLPRICE("1/1/2018", "1/1/2019", "3.00%"));