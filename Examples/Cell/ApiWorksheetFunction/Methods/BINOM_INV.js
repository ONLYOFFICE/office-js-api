// This example shows how to return the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value. 

// How to get a smallest value for which the cumulative binomial distribution >= criterion value.

// Use function to get a minimum value so that the cumulative binomial distribution >= criterion value.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.BINOM_INV(678, 0.1, 0.007);
worksheet.GetRange("B2").SetValue(ans);