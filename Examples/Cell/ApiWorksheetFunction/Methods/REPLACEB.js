// Replace a set of characters, based on the number of characters and the start position specified, with a new set of characters and is intended for languages that use the double-byte character set (DBCS) like Japanese, Chinese, Korean etc in a spreadsheet.

// How to replace a substring with another one using starting index and length in a spreadsheet.

// Use a function to replace one part of a text with another one indicating charachters count and index in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.REPLACEB("Online Office", 8, 6, "portal"));