// Return the serial number of the date before or after a specified number of workdays with custom weekend parameters in a spreadsheet.

// How to return the serial number of the date adding some workdays in a spreadsheet.

// Use a function to calculate the serial number of the date in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.WORKDAY_INTL("9/8/2017", "-20", "0000011", "8/15/2017");

worksheet.GetRange("C1").SetValue(ans);