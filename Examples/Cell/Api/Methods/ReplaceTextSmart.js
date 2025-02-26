// This example replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings.

// Replace string values of the selected range with a new values.

// Replace cell string values with a new ones.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("A2").SetValue("2");
var oRange = oWorksheet.GetRange("A1:A2");
oRange.Select();
Api.ReplaceTextSmart(["Cell 1", "Cell 2"]);