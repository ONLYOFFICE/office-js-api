// Determine cumulative probability for beta distribution in a spreadsheet.

// How do I calculate what percentage of outcomes fall below a specific value in a spreadsheet?

// Assess the probability that a random result occurs up to a given threshold in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.BETADIST(0.4, 4, 5);
worksheet.GetRange("B2").SetValue(ans);