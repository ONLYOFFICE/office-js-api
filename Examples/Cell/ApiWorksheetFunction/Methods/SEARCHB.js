// Return the location of the specified substring in a string and is intended for languages that use the double-byte character set (DBCS) like Japanese, Chinese, Korean etc in a spreadsheet.

// How to get number of characters counting from the first occurance of search text for double-byte character set languages in a spreadsheet.

// Use a function to count characters starting from the index at which the search text appears in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SEARCHB("line", "Online Office"));