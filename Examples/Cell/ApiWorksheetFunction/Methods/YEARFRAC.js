
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.YEARFRAC("12/7/1981", "11/5/2018");

oWorksheet.GetRange("C1").SetValue(ans);
