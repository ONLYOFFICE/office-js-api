// Extract text from the left of a string using byte count for multi-byte characters in a spreadsheet.

// How do I get a substring from text in languages like Chinese or Japanese in a spreadsheet?

// Work with left-aligned text extraction that counts bytes instead of characters in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LEFTB("Online Office", 6));