// Return the error function integrated between the specified lower and upper limits in a spreadsheet.

// How to get an error function in a spreadsheet.

// Use function to get an error function set between upper and lower limits in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ERF(-2));