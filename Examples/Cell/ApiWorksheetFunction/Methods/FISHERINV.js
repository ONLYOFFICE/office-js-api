// Reverse a Fisher transformation to get a correlation value in a spreadsheet.

// How do I convert a Fisher transformation back to a correlation in a spreadsheet?

// Extract the original correlation value from its Fisher transformation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.FISHERINV(0.56);
worksheet.GetRange("B2").SetValue(ans);

