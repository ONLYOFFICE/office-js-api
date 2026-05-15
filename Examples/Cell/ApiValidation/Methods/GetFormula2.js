// Read the upper boundary value from a range-based validation rule in a spreadsheet.

// How do I find out the second condition value used in a between-range validation in a spreadsheet?

// Confirm the maximum limit defined when a validation rule checks values between two numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlBetween", 10, 20);
let formula2 = validation.GetFormula2();
worksheet.GetRange("B1").SetValue("Formula2: " + formula2);