// Find the specified substring within another string and is intended for languages that use the double-byte character set (DBCS) like Japanese, Chinese, Korean etc in a spreadsheet.

// How to get an index of a substring from a string and its double-byte character language in a spreadsheet.

// Use function to find out a starting position of a substring containing in another text and its character set (DBCS) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FINDB("line", "Online Office"));