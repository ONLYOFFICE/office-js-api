// Set the specified font family as the font name for the cell range.

// How to change a cell font family.

// Get a range and set its font family using its name in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetFontName("Arial");