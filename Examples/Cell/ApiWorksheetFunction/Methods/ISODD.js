
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var result = oFunction.ISODD("94");
oWorksheet.GetRange("C3").SetValue(result);
