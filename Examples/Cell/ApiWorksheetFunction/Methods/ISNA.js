// Check whether a value is N/A, and return true or false in a spreadsheet.

// How to check if the cell contains N/A value.

// Use a function to check whether a range data is an N/A value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISNA("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISNA(255));
worksheet.GetRange("A3").SetValue(func.ISNA("www.example.com"));