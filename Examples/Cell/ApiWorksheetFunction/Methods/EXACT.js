// This example shows how to check whether two text strings are exactly the same, and returns true or false. This function is case-sensitive.

// How to compare strings.

// Use function to compare two texts (case-sensitive).

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.EXACT("MyPassword", "mypassword"));