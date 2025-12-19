// This example sets the validation type.

// How to change the validation type.

// Set the validation type.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber");
validation.SetType("xlValidateDecimal");
let validationType = validation.GetType();
worksheet.GetRange("B1").SetValue("New validation type: " + validationType);
