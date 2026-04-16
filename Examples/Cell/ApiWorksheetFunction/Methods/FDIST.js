// Return the (right-tailed) F probability distribution (degree of diversity) for two data sets in a spreadsheet.

// How to get an F probability distribution of two datasets in a spreadsheet.

// Use function to get F probability distribution (degree of diversity) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.FDIST(10, 6, 4);
worksheet.GetRange("B2").SetValue(ans);