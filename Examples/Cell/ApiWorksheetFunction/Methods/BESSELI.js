// Compute the modified Bessel function of the first kind for a given value and order in a spreadsheet.

// Evaluate the modified Bessel function I at a specific order in a spreadsheet.

// Calculate an engineering Bessel value used in wave and heat-diffusion problems in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELI(3.5, 1));
