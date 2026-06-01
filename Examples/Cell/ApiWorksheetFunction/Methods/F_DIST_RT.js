// Return the (right-tailed) F probability distribution for two data sets.

// Calculate the right-tailed probability of F-distributed values.

// Determine F distribution using F_DIST_RT with specified degrees of freedom.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.F_DIST_RT(10, 6, 4);
worksheet.GetRange("B2").SetValue(ans);