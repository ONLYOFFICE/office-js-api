// Calculate the Weibull distribution using the WEIBULL compatibility function in a spreadsheet.

// How do I compute the Weibull distribution for probability calculations in a spreadsheet?

// Evaluate the Weibull probability distribution with specific parameters in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.WEIBULL(12, 2, 5, true);
worksheet.GetRange("B2").SetValue(result);
