// Return the second, a number from 0 to 59 in a spreadsheet.

// Extract the seconds component from a time value using the SECOND function.

// Apply the function to retrieve and display the seconds in a cell.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.SECOND("16:39:35"); 

worksheet.GetRange("C1").SetValue(ans);