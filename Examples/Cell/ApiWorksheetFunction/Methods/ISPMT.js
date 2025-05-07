// This example shows how to return the interest paid during a specific period of an investment.

// How to get the investment interest paid during a specific period.

// Use a function to get an interest paid during a specific period.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ISPMT(0.1/12, 1, 2*12, 2000));