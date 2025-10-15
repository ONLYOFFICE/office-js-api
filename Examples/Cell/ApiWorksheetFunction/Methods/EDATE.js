// This example shows how to return the serial number of the date which comes the indicated number of months before or after the start date.

// How to get a date some months before or after the start date.

// Use function to get the serial number of the date indicated number of months before or after the start date.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.EDATE("3/16/2018", 7); 

worksheet.GetRange("C1").SetValue(ans);
