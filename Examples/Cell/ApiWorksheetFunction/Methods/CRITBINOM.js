// This example shows how to return the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value.

// How to return the minimum value for which the cumulative binomial distribution >= criterion value.

// Use function to the minimum value for which the cumulative binomial distribution >= criterion value.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.CRITBINOM(678, 0.1, 0.007);
worksheet.GetRange("B2").SetValue(ans);