
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.YEAR("3/16/2018");

oWorksheet.GetRange("C1").SetValue(ans);
