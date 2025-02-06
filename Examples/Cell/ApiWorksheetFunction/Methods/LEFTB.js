// This example shows how to extract the substring from the specified string starting from the left character and is intended for languages that use the double-byte character set (DBCS) like Japanese, Chinese, Korean etc.
// How to extract the substring from the left character.
// Use a function to get the substring from the left.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.LEFTB("Online Office", 6));