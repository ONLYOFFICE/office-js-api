// Return the amount received at maturity for a fully invested security in a spreadsheet.

// How to estimate the amount received at maturity in a spreadsheet.

// Use a function to calculate the funds got at maturity for a fully invested security in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RECEIVED("1/1/2017", "6/1/2019", "$10,000.00", "3.75%", 2));