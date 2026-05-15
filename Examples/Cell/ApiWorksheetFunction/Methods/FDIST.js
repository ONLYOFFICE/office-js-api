// Return the (right-tailed) F probability distribution (degree of diversity) for two data sets in a spreadsheet.

// Get an F probability distribution of two datasets.

// Calculate F probability distribution (degree of diversity) using FDIST function in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.FDIST(10, 6, 4);
worksheet.GetRange("B2").SetValue(ans);