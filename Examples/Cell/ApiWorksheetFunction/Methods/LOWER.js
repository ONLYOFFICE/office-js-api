// Convert text to all lowercase letters in a spreadsheet.

// How do I change "HELLO" to "hello" in a spreadsheet?

// Transform mixed case text into lowercase in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LOWER("Day"));