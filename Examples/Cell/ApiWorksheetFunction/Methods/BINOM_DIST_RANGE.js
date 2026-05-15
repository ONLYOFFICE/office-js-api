// Calculate the probability of success within a specific range in a spreadsheet.

// What is the chance of getting between X and Y successes in N attempts in a spreadsheet?

// Estimate outcomes when trials have consistent success rates in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BINOM_DIST_RANGE(60, 0.75, 45, 50));