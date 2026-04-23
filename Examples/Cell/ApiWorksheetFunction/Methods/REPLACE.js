// Swap part of a text value with different text at a specific position in a spreadsheet.

// How do I change a portion of text within a larger string in a spreadsheet?

// Remove a section of text and insert new content in its place in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.REPLACE("Online Office", 8, 6, "portal"));