
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.FISHERINV(0.56);
oWorksheet.GetRange("B2").SetValue(ans);


