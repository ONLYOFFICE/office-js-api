// Count the byte length of text for languages with multi-byte characters in a spreadsheet.

// How do I measure text length in Chinese, Japanese, or other double-byte languages in a spreadsheet?

// Get the byte count of text instead of character count in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LENB("Online Office"));