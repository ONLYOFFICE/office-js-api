// This example shows how to return the serial number of the last day of the month before or after the specified number of months.

// How to get a date of the last day of the month before or after specified months.

// Use function to get the serial number of the last day of the month before or after the specified number of months.

const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.EOMONTH("3/16/2018", 10); 

worksheet.GetRange("C1").SetValue(ans);
