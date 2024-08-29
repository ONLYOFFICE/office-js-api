
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.DAY("2018/3/16"); 

oWorksheet.GetRange("C1").SetValue(ans);
