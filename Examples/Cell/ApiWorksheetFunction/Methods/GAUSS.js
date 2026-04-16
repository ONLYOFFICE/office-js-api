// Calculate the probability that a member of a standard normal population will fall between the mean and arg1 standard deviations from the mean in a spreadsheet.

// How to calculate the probability that a member of a standard normal population will fall between two values in a spreadsheet.

// Use a function to calculate the probability in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAUSS(2);
worksheet.GetRange("B2").SetValue(ans);