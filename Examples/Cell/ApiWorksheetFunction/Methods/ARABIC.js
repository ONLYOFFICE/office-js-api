// This example shows how to convert a Roman numeral to Arabic.

// How to convert numbers to Arabic numerical.

// Use function to convert numbers to Arabic numerical.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ARABIC("MCCL"));