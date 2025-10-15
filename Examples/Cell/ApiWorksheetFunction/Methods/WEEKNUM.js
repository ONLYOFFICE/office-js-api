// This example shows how to return a number from 1 to 7 identifying the day of the week of the specified date.

// How to return a weekday.

// Use a function to get a weekday using numbers.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.WEEKNUM("11/5/2018", 2); 

worksheet.GetRange("C1").SetValue(ans);
