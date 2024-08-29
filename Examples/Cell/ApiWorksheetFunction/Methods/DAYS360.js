
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.DAYS360("3/31/2018", "4/30/2019", false); 

oWorksheet.GetRange("C1").SetValue(ans);
