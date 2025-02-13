// This example specifies that the contents of the current cell is displayed along with a line appearing directly below the character.
// How to add underline to the cell value.
// Get a range and add underline to its text.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("The text underlined with a single line");
oWorksheet.GetRange("A2").SetUnderline("single");
oWorksheet.GetRange("A4").SetValue("Normal text");