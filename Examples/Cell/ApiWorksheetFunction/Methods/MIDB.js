// This example shows how to extract the characters from the specified string starting from any position and is intended for languages that use the double-byte character set (DBCS) like Japanese, Chinese, Korean etc.
// How to get an array of characters from the specified position.
// Use a function to get an array of characters from the string.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.MIDB("Online Office", 3, 4));