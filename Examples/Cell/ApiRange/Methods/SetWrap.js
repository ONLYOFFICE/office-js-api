// Wrap text inside a cell so it fits within the column width in a spreadsheet.

// How do I stop text from spilling out of a cell in a spreadsheet?

// Enable word wrap on a cell to keep long content visible without widening the column in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is the text wrapped to fit the cell size.");
range.SetWrap(true);
worksheet.GetRange("A3").SetValue("The text in the cell A1 is wrapped: " + range.GetWrapText());