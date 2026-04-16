// Return the year fraction representing the number of whole days between the start date and end date in a spreadsheet.

// How to return the year fraction in a spreadsheet.

// Use a function to calculate a year fraction in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.YEARFRAC("12/7/1981", "11/5/2018");

worksheet.GetRange("C1").SetValue(ans);