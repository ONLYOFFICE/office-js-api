
const oWorksheet = Api.GetActiveSheet();

//method params
var number = 5;

oWorksheet.GetRange("A1").SetValue(number);

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.PHI(number);

oWorksheet.GetRange("C1").SetValue(ans);
