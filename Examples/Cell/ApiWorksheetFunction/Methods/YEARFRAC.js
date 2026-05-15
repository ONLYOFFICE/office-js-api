// Calculate the fraction of a year between two dates in a spreadsheet.

// How do I express the time period between two dates as a fraction of a year in a spreadsheet?

// Find the percentage of a year that spans between a start and end date in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.YEARFRAC("12/7/1981", "11/5/2018");

worksheet.GetRange("C1").SetValue(ans);