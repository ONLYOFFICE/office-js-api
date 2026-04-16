// Remove all the nonprintable characters from the text in a spreadsheet.

// How to remove all the nonprintable characters from the text in a spreadsheet.

// Use function to clean all nonprintable characters in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CLEAN("\ntext"));