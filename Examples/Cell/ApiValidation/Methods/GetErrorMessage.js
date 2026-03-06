// This example gets the error message text.

// How to retrieve the validation error message.

// Get the error message.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorMessage("Value must be greater than 10");
let errorMessage = validation.GetErrorMessage();
worksheet.GetRange("B1").SetValue("Error message: " + errorMessage);
