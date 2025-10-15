// This example shows how to return the price per $100 face value for a Treasury bill.

// How to return the price per $100 face value for a Treasury bill.

// Use a function to calculate the price per $100 face value.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TBILLPRICE("1/1/2018", "1/1/2019", "3.00%"));