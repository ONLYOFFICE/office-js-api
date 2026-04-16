// Check whether two text strings are exactly the same, and return true or false. This function is case-sensitive in a spreadsheet.

// How to compare strings in a spreadsheet.

// Use function to compare two texts (case-sensitive) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.EXACT("MyPassword", "mypassword"));