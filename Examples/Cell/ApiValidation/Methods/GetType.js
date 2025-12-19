// This example gets the validation type.

// How to retrieve the validation type.

// Get the validation type.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let validationType = validation.GetType();
worksheet.GetRange("B1").SetValue("Validation type: " + validationType);
