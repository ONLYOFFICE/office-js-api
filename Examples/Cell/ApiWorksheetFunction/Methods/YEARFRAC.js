// This example shows how to return the year fraction representing the number of whole days between the start date and end date.

// How to return the year fraction.

// Use a function to calculate a year fraction.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.YEARFRAC("12/7/1981", "11/5/2018");

worksheet.GetRange("C1").SetValue(ans);
