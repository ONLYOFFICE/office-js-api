// This example sets the italic property to the text characters in the cell.
// How to make a text value of cells italic.
// Get a range and make specified cells font style italic.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("Italicized text");
oWorksheet.GetRange("A2").SetItalic(true);
oWorksheet.GetRange("A3").SetValue("Normal text");