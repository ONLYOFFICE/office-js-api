// Get the discount rate for a security.

// Calculate the annual discount rate based on settlement and maturity dates.

// Use the DISC function to determine the discount rate for an investment security.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DISC("10/15/2018", "1/1/2020", 98, 100, 1));