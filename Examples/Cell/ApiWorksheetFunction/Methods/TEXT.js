// Convert a value to text in a specific number format in a spreadsheet.

// Format the number as a currency string with two decimal places.

// Apply the TEXT function with value and format code parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TEXT(45.5, "$0.00"));