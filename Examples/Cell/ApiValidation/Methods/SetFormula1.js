// This example sets the first formula in data validation.

// How to set the validation formula.

// Set the first formula.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetFormula1("20");
let formula1 = validation.GetFormula1();
worksheet.GetRange("B1").SetValue("New Formula1: " + formula1);
