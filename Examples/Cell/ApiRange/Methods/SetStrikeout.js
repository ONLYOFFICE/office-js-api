// This example specifies that the contents of the cell is displayed with a single horizontal line through the center of the contents.

// How to add strikeout to the cell value.

// Get a range and add strikeout to its text.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("Strickout text");
oWorksheet.GetRange("A2").SetStrikeout(true);
oWorksheet.GetRange("A3").SetValue("Normal text");