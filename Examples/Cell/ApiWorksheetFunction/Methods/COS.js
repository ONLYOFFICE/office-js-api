// Calculate the cosine value of an angle in a spreadsheet.

// What is the cosine of a given angle in a spreadsheet?

// Find the ratio of a triangle's side using an angle in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COS(1.5));