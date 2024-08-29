var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.AVERAGE(123, 197, 46, 345, 67, 456);
oWorksheet.GetRange("B2").SetValue(ans);