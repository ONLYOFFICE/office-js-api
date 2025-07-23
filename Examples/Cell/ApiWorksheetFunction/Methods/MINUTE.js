// This example shows how to return the minute, a number from 0 to 59.

// How to get a minute from a time.

// Use a function to get minutes from a time object.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.MINUTE("4:25 pm"); 

worksheet.GetRange("C1").SetValue(ans);
