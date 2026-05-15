// Replace a portion of text by position and character count, supporting double-byte characters in a spreadsheet.

// How do I replace text by counting characters from the start in languages like Chinese or Japanese in a spreadsheet?

// Swap a substring using byte positions instead of character positions for multilingual text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.REPLACEB("Online Office", 8, 6, "portal"));