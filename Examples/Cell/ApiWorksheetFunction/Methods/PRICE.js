// Return the price per $100 face value for a security that pays periodic interest in a spreadsheet.

// How to return the price per $100 face value in a spreadsheet.

// Use a function to return the price per $100 face value for a security in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PRICE("1/1/2017", "6/1/2019", 0.05, 0.09, 105, 2));