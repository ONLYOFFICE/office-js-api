// Calculate the interest rate for a security in a spreadsheet.

// How do I find the interest rate based on investment values in a spreadsheet?

// Determine the return rate on a security investment in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.INTRATE("1/1/2018", "11/12/2018", 1000, 1050, 2));