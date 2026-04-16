// Return the number (code point) corresponding to the first character of the text in a spreadsheet.

// How to get an Unicode of a character in a spreadsheet.

// Use a function to return the character's Unicode in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.UNICODE("example"));