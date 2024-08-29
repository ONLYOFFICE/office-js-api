var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.BETADIST(0.4, 4, 5);
oWorksheet.GetRange("B2").SetValue(ans);