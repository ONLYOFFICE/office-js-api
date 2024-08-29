
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.EDATE("3/16/2018", 7); 

oWorksheet.GetRange("C1").SetValue(ans);
