var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var avg = oFunction.CHIDIST(12, 10);
oWorksheet.GetRange("B2").SetValue(avg);