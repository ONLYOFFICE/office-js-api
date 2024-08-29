var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.AVEDEV(78, 98, 123, 45, 70, 67, 3, 9, 289));