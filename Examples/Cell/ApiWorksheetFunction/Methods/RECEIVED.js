// Calculate the cash amount paid out when a security reaches its maturity date in a spreadsheet.

// How do I determine what I will receive when a security matures in a spreadsheet?

// Compute the value received at the end of an investment period given interest rates in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RECEIVED("1/1/2017", "6/1/2019", "$10,000.00", "3.75%", 2));