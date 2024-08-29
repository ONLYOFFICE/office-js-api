
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.NETWORKDAYS("3/16/2018", "12/31/2018"); 

oWorksheet.GetRange("C1").SetValue(ans);
