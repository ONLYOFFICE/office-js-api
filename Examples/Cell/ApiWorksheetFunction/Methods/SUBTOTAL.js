// Return a subtotal in a list or database in a spreadsheet.

// Calculate a subtotal using the SUBTOTAL function on numeric values.

// Returns the calculated subtotal based on the specified function number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SUBTOTAL(9, 10, 30, 50, 5));