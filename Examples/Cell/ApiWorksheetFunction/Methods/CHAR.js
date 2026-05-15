// Convert a numeric code to its character symbol in a spreadsheet.

// What character does a number code represent in a spreadsheet?

// Display the letter or symbol matching a code value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CHAR(234));