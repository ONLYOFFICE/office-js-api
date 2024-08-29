var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.FDIST(10, 6, 4);
oWorksheet.GetRange("B2").SetValue(ans);