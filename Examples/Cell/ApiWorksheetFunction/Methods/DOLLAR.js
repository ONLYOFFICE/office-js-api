// Convert a number to text, using a currency format $#.## in a spreadsheet.

// How to convert a number to text in a spreadsheet.

// Use function to get text from a number using dollar format.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DOLLAR(98.9997, 3));