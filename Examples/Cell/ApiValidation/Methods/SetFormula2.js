// This example sets the second formula in data validation.

// How to set the second validation formula.

// Set the second formula.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlBetween", 10, 20);
validation.SetFormula2("30");
let formula2 = validation.GetFormula2();
worksheet.GetRange("B1").SetValue("New Formula2: " + formula2);
