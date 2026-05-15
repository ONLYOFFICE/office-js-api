// Get the current date and time in a spreadsheet.

// How do I insert today's date and the current time in a spreadsheet?

// Display the current moment as a date and time value in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.NOW(); 

worksheet.GetRange("C1").SetValue(ans);