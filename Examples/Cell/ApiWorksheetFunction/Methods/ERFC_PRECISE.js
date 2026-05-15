// Calculate the complementary error function with higher precision in a spreadsheet.

// How do I compute the complementary error function precisely in a spreadsheet?

// Evaluate the precise complement of the error function from 0 to a limit in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ERFC_PRECISE(0.745));