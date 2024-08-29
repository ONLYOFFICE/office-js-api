
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.MINUTE("4:25 pm"); 

oWorksheet.GetRange("C1").SetValue(ans);
