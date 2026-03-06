// This example gets the second formula in data validation.

// How to retrieve the second validation formula.

// Get the second formula.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlBetween", 10, 20);
let formula2 = validation.GetFormula2();
worksheet.GetRange("B1").SetValue("Formula2: " + formula2);
