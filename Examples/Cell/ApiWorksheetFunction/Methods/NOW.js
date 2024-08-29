
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.NOW(); 

oWorksheet.GetRange("C1").SetValue(ans);
