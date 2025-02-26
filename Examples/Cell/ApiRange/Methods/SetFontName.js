// This example sets the specified font family as the font name for the cell range.

// How to change a cell font family.

// Get a range and set its font family using its name.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("2");
var oRange = oWorksheet.GetRange("A1:D5");
oRange.SetFontName("Arial");