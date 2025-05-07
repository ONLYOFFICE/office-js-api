// This example shows how to return the present value of an investment: the total amount that a series of future payments is worth now.

// How to get the present value of an investment.

// Use a function to calculate the total amount that a series of future payments is worth now.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.PV(0.1/12, 2*12, -500, 0));