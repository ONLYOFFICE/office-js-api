// Return the false logical value in a spreadsheet.

// How to get false value in a spreadsheet.

// Use function to get a boolean false in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.FALSE(); //returns false, doesnt require arguments
worksheet.GetRange("C1").SetValue(ans);