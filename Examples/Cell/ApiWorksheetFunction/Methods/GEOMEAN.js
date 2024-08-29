
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.GEOMEAN(28, 16, 878, 800, 1650, 2000);
oWorksheet.GetRange("B2").SetValue(ans);

