// Convert hours, minutes and seconds given as numbers to a serial number, formatted with the time format in a spreadsheet.

// Create a serial number from time components for use in spreadsheet calculations.

// Apply the TIME function with hour, minute, and second parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TIME(23, 4, 39));