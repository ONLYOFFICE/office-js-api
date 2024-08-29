var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.CONFIDENCE_T(0.5, 57, 8);
oWorksheet.GetRange("B2").SetValue(ans);