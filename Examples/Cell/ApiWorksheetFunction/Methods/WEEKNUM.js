// Get the week number of a date within the year in a spreadsheet.

// How do I find which week of the year a specific date belongs to in a spreadsheet?

// Calculate the numeric week position for any date in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.WEEKNUM("11/5/2018", 2); 

worksheet.GetRange("C1").SetValue(ans);