// Return the inverse of the (right-tailed) F probability distribution.

// Calculate the inverse function where p = F.DIST.RT(x,...) implies F.INV.RT(p,...) = x.

// Determine critical F values using F_INV_RT with probability and degrees of freedom.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.F_INV_RT(0.01, 6, 4));