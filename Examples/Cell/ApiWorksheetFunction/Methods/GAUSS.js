// This example shows how to calculate the probability that a member of a standard normal population will fall between the mean and arg1 standard deviations from the mean.

// How to calculate the probability that a member of a standard normal population will fall between two values.

// Use a function to calculate the probability.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.GAUSS(2);
worksheet.GetRange("B2").SetValue(ans);