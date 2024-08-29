
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.WEEKDAY("11/5/2018", 2); 

oWorksheet.GetRange("C1").SetValue(ans);
