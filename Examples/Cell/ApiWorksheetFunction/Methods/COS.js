// Get the cosine of an angle in a spreadsheet.

// How to find a cosine in a spreadsheet.

// Use function to get the cosine of an angle in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COS(1.5));