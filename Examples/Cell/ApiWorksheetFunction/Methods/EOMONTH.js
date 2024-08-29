
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.EOMONTH("3/16/2018", 10); 

oWorksheet.GetRange("C1").SetValue(ans);
