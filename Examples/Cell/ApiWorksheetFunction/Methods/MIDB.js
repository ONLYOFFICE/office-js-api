// Extract text from a double-byte character string at a specific position in a spreadsheet.

// What characters do I get from a DBCS string in a spreadsheet?

// Retrieve a substring from a string designed for Asian languages in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MIDB("Online Office", 3, 4));