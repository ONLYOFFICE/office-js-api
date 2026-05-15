// Extract the hour from a time value in a spreadsheet.

// How do I get the hour component from a time in a spreadsheet?

// Return the hour portion of a time as a number from 0 to 23 in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.HOUR("4:17 pm"); 

worksheet.GetRange("C1").SetValue(ans);