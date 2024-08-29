
const oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange("A1").SetValue(0.25);

//method params
var value = oWorksheet.GetRange("A1").GetValue();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.NORMSINV(value);

oWorksheet.GetRange("C1").SetValue(ans);
