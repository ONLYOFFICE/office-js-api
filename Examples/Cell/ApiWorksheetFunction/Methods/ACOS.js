// Find the angle corresponding to a cosine value in a spreadsheet.

// How do I convert a cosine result back to its angle measurement in a spreadsheet?

// Determine the radian angle from a known cosine value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACOS(0));