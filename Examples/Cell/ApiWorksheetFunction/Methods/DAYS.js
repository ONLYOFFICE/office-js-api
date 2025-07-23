// This example shows how to return the number of days between the two dates.

// How to get difference between two dates in days.

// Use function to get days count between two dates.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.DAYS("3/31/2018", "3/16/2018"); 

worksheet.GetRange("C1").SetValue(ans);
