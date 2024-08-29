var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.RECEIVED("1/1/2017", "6/1/2019", "$10,000.00", "3.75%", 2));