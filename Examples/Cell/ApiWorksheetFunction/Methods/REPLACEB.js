// This example shows how to replace a set of characters, based on the number of characters and the start position specified, with a new set of characters and is intended for languages that use the double-byte character set (DBCS) like Japanese, Chinese, Korean etc.

// How to replace a substring with another one using starting index and length.

// Use a function to replace one part of a text with another one indicating charachters count and index.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.REPLACEB("Online Office", 8, 6, "portal"));