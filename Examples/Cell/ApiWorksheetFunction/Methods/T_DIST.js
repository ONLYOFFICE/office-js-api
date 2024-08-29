

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.T_DIST(1.5, 10, false);
oWorksheet.GetRange("B2").SetValue(ans);

