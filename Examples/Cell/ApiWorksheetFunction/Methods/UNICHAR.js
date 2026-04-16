// Return the Unicode character referenced by the given numeric value in a spreadsheet.

// How to get an Unicode character in a spreadsheet.

// Use a function to return the Unicode character knowing its reference number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.UNICHAR(378));