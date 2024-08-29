var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMPRODUCT("-2+2.5i", "0.1+1.5j", "1+3i"));