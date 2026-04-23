// Return the number (code point) corresponding to the first character of the text in a spreadsheet.

// The UNICODE function converts characters to their numeric Unicode values.

// Apply the function to obtain a character's code point from text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.UNICODE("example"));