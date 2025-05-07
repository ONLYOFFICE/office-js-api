// This example shows how to return the accrued interest for a security that pays interest at maturity.

// How to get an accrued interest for a security that pays periodic interest at maturity.

// Get a function that gets accrued interest for a security at maturity.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ACCRINTM("1/1/2018", "10/15/2018", "3.50%", 1000, 1));