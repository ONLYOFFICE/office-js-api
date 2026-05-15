// Extract the minute component from a time value in a spreadsheet.

// What minute does a time represent in a spreadsheet?

// Get the minute portion as a number from a time in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.MINUTE("4:25 pm"); 

worksheet.GetRange("C1").SetValue(ans);