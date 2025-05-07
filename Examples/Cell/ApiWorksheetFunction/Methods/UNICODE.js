// This example shows how to return the number (code point) corresponding to the first character of the text.

// How to get a Unicode of a character.

// Use a function to return the character's Unicode.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.UNICODE("example"));