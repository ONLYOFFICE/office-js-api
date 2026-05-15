// Return the inverse of the (left-tailed) F probability distribution.

// Calculate the inverse function where p = F.DIST(x,...) implies F.INV(p,...) = x.

// Determine critical F values using F_INV with probability and degrees of freedom.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.F_INV(0.01, 6, 4);
worksheet.GetRange("B2").SetValue(ans);