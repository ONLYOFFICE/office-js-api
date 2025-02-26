// This example shows how to find the specified substring within another string and is intended for languages that use the double-byte character set (DBCS) like Japanese, Chinese, Korean etc.

// How to get an index of a substring from a string and its double-byte character language.

// Use function to find out a starting position of a substring containing in another text and its character set (DBCS).

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.FINDB("line", "Online Office"));