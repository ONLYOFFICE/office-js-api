// This example shows how to return the inverse of the gamma cumulative distribution: if p = GAMMADIST(x,...), then GAMMAINV(p,...) = x.

// How to calculate the inverse of the gamma cumulative distribution.

// Use a function to get the inverse of the gamma cumulative distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMAINV(0.4, 9, 2);
worksheet.GetRange("B2").SetValue(ans);
