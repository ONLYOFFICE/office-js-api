// This example sets the specified font family as the font name for the cell range.

// How to change a cell font family.

// Get a range and set its font family using its name.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetFontName("Arial");