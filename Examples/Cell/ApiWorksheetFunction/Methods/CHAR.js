// Return the character specified by the code number from your computer's character set in a spreadsheet.

// How to return the character specified by the code number from your computer's character set in a spreadsheet.

// Use function to return the character specified by the code number from your computer's character set in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CHAR(234));