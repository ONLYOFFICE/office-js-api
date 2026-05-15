// Find the price of a discounted bond in a spreadsheet.

// What is the price of a discounted security per $100 face value in a spreadsheet?

// Determine the cost of a short-term security based on discount rate in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PRICEDISC("1/1/2017", "6/1/2019", 0.05, 105, 1));