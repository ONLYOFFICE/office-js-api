// Identify whether a cell displays an N/A error in a spreadsheet.

// How do I check if a cell contains the N/A error in a spreadsheet?

// Use a function to find cells with N/A errors and handle them appropriately in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISNA("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISNA(255));
worksheet.GetRange("A3").SetValue(func.ISNA("www.example.com"));