// Return the (left-tailed) F probability distribution for two data sets.

// Calculate the left-tailed probability of F-distributed values.

// Determine F distribution using F_DIST with specified degrees of freedom.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.F_DIST(10, 6, 4, false);
worksheet.GetRange("B2").SetValue(ans);