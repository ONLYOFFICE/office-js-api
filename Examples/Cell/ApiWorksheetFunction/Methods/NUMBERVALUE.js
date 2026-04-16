// Convert text to a number, in a locale-independent way in a spreadsheet.

// How to get a number from text in a spreadsheet.

// Use a function to convert a text to a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NUMBERVALUE("2.500,27", ",", "."));