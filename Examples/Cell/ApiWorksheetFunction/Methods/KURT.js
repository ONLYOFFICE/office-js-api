// This example shows how to return the kurtosis of a data set.

// How to know a data set kurtosis.

// Use a function to find out kurtosis of a data set.

const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let kurtosis = func.KURT(3, 89, 34, 2, 45, 4, 45, 13);
worksheet.GetRange("C1").SetValue(kurtosis);