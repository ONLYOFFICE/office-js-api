// Return the inverse of the gamma cumulative distribution: if p = GAMMADIST(x,...), then GAMMAINV(p,...) = x in a spreadsheet.

// How to calculate the inverse of the gamma cumulative distribution in a spreadsheet.

// Use a function to get the inverse of the gamma cumulative distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMAINV(0.4, 9, 2);
worksheet.GetRange("B2").SetValue(ans);