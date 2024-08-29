const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var kurtosis = oFunction.KURT(3, 89, 34, 2, 45, 4, 45, 13);
oWorksheet.GetRange("C1").SetValue(kurtosis);