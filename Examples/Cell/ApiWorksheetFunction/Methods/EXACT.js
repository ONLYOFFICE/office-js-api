// Check whether two text strings are exactly the same, and return true or false. This function is case-sensitive in a spreadsheet.

// Compare two text strings with case sensitivity.

// Verify if two texts are identical using EXACT function in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.EXACT("MyPassword", "mypassword"));