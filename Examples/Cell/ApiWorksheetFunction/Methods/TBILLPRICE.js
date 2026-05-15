// Return the price per $100 face value for a Treasury bill in a spreadsheet.

// Calculate the price based on Treasury bill settlement, maturity, and discount rate.

// Apply the TBILLPRICE function with date and discount parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TBILLPRICE("1/1/2018", "1/1/2019", "3.00%"));