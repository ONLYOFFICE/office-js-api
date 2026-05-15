// Change the font family used in a cell range in a spreadsheet.

// How do I switch the typeface for a group of cells in a spreadsheet?

// Apply a named font to all text within a range of cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetFontName("Arial");