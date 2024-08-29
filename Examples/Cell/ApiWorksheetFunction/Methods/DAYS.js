
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.DAYS("3/31/2018", "3/16/2018"); 

oWorksheet.GetRange("C1").SetValue(ans);
