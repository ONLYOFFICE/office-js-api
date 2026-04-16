// Return the price per $100 face value for a Treasury bill in a spreadsheet.

// How to return the price per $100 face value for a Treasury bill in a spreadsheet.

// Use a function to calculate the price per $100 face value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TBILLPRICE("1/1/2018", "1/1/2019", "3.00%"));