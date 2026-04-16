// Return the accrued interest for a security that pays interest at maturity in a spreadsheet.

// How to get an accrued interest for a security that pays periodic interest at maturity in a spreadsheet.

// Get a function that gets accrued interest for a security at maturity in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACCRINTM("1/1/2018", "10/15/2018", "3.50%", 1000, 1));