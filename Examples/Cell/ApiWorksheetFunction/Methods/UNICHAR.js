// This example shows how to return the Unicode character referenced by the given numeric value.

// How to get a Unicode character.

// Use a function to return the Unicode character knowing its reference number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.UNICHAR(378));