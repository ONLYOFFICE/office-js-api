

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.TDIST(1.5, 10, 1);
oWorksheet.GetRange("B2").SetValue(ans);

