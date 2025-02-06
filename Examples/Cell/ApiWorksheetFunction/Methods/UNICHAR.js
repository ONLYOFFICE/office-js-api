// This example shows how to return the Unicode character referenced by the given numeric value.
// How to get a Unicode character.
// Use a function to return the Unicode character knowing its reference number.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.UNICHAR(378));