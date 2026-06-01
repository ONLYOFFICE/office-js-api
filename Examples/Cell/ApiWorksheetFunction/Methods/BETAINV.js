// Find the value corresponding to a specific probability in the beta distribution in a spreadsheet.

// How do I locate the data point that matches a given probability level in a spreadsheet?

// Reverse-calculate from probability to the original data value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BETAINV(0.2, 4, 5));