// Convert any value to a number in a spreadsheet.

// Transform values into numeric form for calculations in a spreadsheet.

// Change boolean values and dates into numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.N(false));