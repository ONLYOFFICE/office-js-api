// This example shows how to return the sum of a power series based on the formula.

// How to calculate the sum of a power series.

// Use a function to sum up a power series using a formula.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SERIESSUM(5, 2, 1, 3));