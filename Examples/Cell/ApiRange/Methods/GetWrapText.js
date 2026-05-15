// Check whether text wrapping is enabled for a cell in a spreadsheet.

// How do I find out if a cell is set to wrap its text in a spreadsheet?

// Confirm the wrap setting of a cell by reading and displaying it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is the text wrapped to fit the cell size.");
range.SetWrap(true);
worksheet.GetRange("A3").SetValue("The text in the cell A1 is wrapped: " + range.GetWrapText());