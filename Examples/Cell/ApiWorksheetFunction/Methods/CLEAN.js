// Remove invisible control characters from imported or pasted text in a spreadsheet.

// Eliminate all nonprintable characters that don't display properly in your cells in a spreadsheet.

// Purify text data by stripping out hidden formatting and special characters in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CLEAN("\ntext"));