// Return the serial number of the last day of the month before or after the specified number of months in a spreadsheet.

// How to get a date of the last day of the month before or after specified months in a spreadsheet.

// Use function to get the serial number of the last day of the month before or after the specified number of months in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.EOMONTH("3/16/2018", 10); 

worksheet.GetRange("C1").SetValue(ans);