
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.SECOND("16:39:35"); 

oWorksheet.GetRange("C1").SetValue(ans);
