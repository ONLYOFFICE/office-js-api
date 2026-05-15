// Find the probability for a standard normal distribution in a spreadsheet.

// How do I calculate the area under the normal distribution curve in a spreadsheet?

// Get the cumulative normal probability for a given standard deviation value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAUSS(2);
worksheet.GetRange("B2").SetValue(ans);