// Extract characters from text for double-byte languages in a spreadsheet.

// How do I get the last characters from text in Asian languages in a spreadsheet?

// Retrieve characters from the right side of text that uses multi-byte characters in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RIGHTB("Online Office", 2));