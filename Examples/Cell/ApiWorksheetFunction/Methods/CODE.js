// Return the code number from your computer's character set for the first character in the specified text string in a spreadsheet.

// How to return the code number from your computer's character set in a spreadsheet.

// Use function to get a code number from your computer's character set in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CODE("office"));