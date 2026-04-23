// Find the price of a bond with periodic interest payments in a spreadsheet.

// What is the market price of a security per $100 face value in a spreadsheet?

// Calculate the cost of a bond based on yield and maturity dates in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PRICE("1/1/2017", "6/1/2019", 0.05, 0.09, 105, 2));