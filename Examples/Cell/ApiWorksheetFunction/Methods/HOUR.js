
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.HOUR("4:17 pm"); 

oWorksheet.GetRange("C1").SetValue(ans);
