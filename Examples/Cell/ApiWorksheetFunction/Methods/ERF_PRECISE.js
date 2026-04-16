// Return the error function integrated between 0 and the specified lower limit in a spreadsheet.

// How to get an error function (from 0 to lower) in a spreadsheet.

// Use function to get an error function set between 0 and lower limits in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ERF_PRECISE(0.745));