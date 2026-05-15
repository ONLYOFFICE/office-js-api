// Extract the day number (1-31) from a date in a spreadsheet.

// What day of the month does a date represent in a spreadsheet?

// Pull the day component from a date value in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.DAY("2018/3/16"); 

worksheet.GetRange("C1").SetValue(ans);