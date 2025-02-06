// This example shows how to convert a number to text, using a currency format $#.##.
// How to convert a number to text.
// Use function to get text from a number using dollar format.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DOLLAR(98.9997, 3));