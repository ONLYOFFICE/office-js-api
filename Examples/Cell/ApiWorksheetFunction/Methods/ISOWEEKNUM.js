// This example shows how to return the ISO week number in the year for a given date. 

// How to get the ISO week number.

// Use a function to get an ISO week number in the year.

const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.ISOWEEKNUM("9/1/2017"); 

worksheet.GetRange("C1").SetValue(ans);
