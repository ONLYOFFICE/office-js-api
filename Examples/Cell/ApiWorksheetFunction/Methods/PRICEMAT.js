// Find the price of a bond that pays interest at maturity in a spreadsheet.

// What is the price of a security that pays interest only at maturity in a spreadsheet?

// Calculate the cost of a maturity-interest security based on settlement and yield in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PRICEMAT("1/1/2017", "6/1/2019", "12/1/2016", 0.05, 0.09, 1));