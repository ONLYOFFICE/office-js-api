// Return the error function integrated between 0 and the specified lower limit in a spreadsheet.

// Get an error function from 0 to the lower limit.

// Calculate the integrated error function using ERF_PRECISE in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ERF_PRECISE(0.745));