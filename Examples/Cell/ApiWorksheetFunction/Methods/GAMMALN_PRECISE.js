
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.GAMMALN_PRECISE(0.5);
oWorksheet.GetRange("B2").SetValue(ans);

