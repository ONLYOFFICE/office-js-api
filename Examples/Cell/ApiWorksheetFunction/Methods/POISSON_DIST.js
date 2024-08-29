
const oWorksheet = Api.GetActiveSheet();

//method params
var x = 9;
var mean = 12;
var cumulative = false;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.POISSON_DIST(x, mean, cumulative);

oWorksheet.GetRange("C1").SetValue(ans);
