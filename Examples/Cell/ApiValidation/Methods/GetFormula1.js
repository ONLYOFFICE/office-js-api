// Get the first formula in data validation.

// How to retrieve the validation formula.

// Get the formula1 for a validation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let formula1 = validation.GetFormula1();
worksheet.GetRange("B1").SetValue("Formula1: " + formula1);