// Calculate the probability of exactly N successes in independent trials in a spreadsheet.

// How do I find the chance of a specific number of successes occurring in a spreadsheet?

// Evaluate the likelihood of an outcome appearing a fixed number of times in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BINOMDIST(50, 67, 0.45, false));