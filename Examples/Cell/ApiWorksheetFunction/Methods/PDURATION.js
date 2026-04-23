// Calculate how many periods an investment needs to reach a target amount in a spreadsheet.

// How do I find the time required for an investment to grow to a specific value in a spreadsheet?

// Determine the number of investment periods until a desired return is achieved in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PDURATION("2.50%", 2000, 2200));