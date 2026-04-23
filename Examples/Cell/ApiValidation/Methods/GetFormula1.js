// Read the primary boundary value set in a cell's validation rule in a spreadsheet.

// How do I find out what the first condition value is for a validated cell in a spreadsheet?

// Verify the lower limit or single threshold defined in a cell's data validation rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let formula1 = validation.GetFormula1();
worksheet.GetRange("B1").SetValue("Formula1: " + formula1);