
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.GAUSS(2);
oWorksheet.GetRange("B2").SetValue(ans);

