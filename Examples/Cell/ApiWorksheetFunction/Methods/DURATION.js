var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DURATION("1/10/2018", "6/15/2019", 0.08, 0.09, 4, 1));