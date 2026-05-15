// Calculate the complementary error function for a specified value in a spreadsheet.

// How do I compute the complementary error function in a spreadsheet?

// Evaluate the complement of the error function from a value to infinity in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ERFC(-2));