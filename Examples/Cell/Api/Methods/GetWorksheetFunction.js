// This example shows how to use built-in functions using worksheet function objects.
// How to use system functions in a spreadsheets.
// Use built-in functions in a worksheet.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ASC("text"));