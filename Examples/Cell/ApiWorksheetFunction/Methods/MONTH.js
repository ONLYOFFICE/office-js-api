// This example shows how to return the month, a number from 1 (January) to 12 (December).

// How to get the month from a date.

// Use a function to get a month.

const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.MONTH("3/16/2018"); 

worksheet.GetRange("C1").SetValue(ans);
