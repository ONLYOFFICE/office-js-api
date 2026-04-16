// Convert a date in the form of text to a number that represents the date in the date-time code.

// How to convert a date from the form of text.

// Use function to get the date from a text in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.DATEVALUE("2018-3-16"); 

worksheet.GetRange("C1").SetValue(ans);