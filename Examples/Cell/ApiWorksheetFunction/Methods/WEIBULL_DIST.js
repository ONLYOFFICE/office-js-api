

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.WEIBULL_DIST(12, 2, 5, true);
oWorksheet.GetRange("B2").SetValue(result);

