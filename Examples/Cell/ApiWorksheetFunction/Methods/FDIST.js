// This example shows how to return the (right-tailed) F probability distribution (degree of diversity) for two data sets.

// How to get an F probability distribution of two datasets.

// Use function to get F probability distribution (degree of diversity).

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.FDIST(10, 6, 4);
worksheet.GetRange("B2").SetValue(ans);