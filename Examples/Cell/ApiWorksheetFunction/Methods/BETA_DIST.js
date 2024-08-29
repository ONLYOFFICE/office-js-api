var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.BETA_DIST(0.4, 4, 5, false);
oWorksheet.GetRange("B2").SetValue(ans);