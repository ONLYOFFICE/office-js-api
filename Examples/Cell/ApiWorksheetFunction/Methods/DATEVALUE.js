// Convert a text date string into a date number in a spreadsheet.

// What date value does a text string represent in a spreadsheet?

// Parse text into a usable date format in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.DATEVALUE("2018-3-16"); 

worksheet.GetRange("C1").SetValue(ans);