const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.AND(12 < 100, 34 < 100, 50 < 100); //AND logical function

oWorksheet.GetRange("C1").SetValue(ans);
