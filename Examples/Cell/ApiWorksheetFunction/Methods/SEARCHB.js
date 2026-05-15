// Find where text appears in cells with double-byte character languages in a spreadsheet.

// How do I search for text in Asian language content in a spreadsheet?

// Locate a word in cells that use multi-byte characters in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SEARCHB("line", "Online Office"));