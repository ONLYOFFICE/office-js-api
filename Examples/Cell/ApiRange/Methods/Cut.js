// Move a range of cells from one location to another in a spreadsheet.

// How do I relocate a group of cells and remove them from their original position in a spreadsheet?

// Transfer cell content to a new spot, leaving the source cells empty in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is a sample text which is move to the range A3.");
range.Cut(worksheet.GetRange("A3"));