var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.CRITBINOM(678, 0.1, 0.007);
oWorksheet.GetRange("B2").SetValue(ans);