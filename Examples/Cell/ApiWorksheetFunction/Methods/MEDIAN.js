

const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var median = oFunction.MEDIAN(4,45,12,34,3,54,2,2);
oWorksheet.GetRange("C1").SetValue(median);


