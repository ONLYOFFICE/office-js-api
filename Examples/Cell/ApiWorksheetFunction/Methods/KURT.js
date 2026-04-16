// Return the kurtosis of a data set in a spreadsheet.

// How to know a data set kurtosis in a spreadsheet.

// Use a function to find out kurtosis of a data set in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let kurtosis = func.KURT(3, 89, 34, 2, 45, 4, 45, 13);
worksheet.GetRange("C1").SetValue(kurtosis);