// Find the value for a given cumulative probability in a lognormal distribution in a spreadsheet.

// How do I determine the percentile value for a lognormal distribution in a spreadsheet?

// Look up the inverse of cumulative lognormal probability in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LOGNORM_INV(0.3, 2, 0.2));