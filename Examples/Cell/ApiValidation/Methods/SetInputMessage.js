// Set the input message text in a spreadsheet.

// How to set the validation input message in a spreadsheet.

// Set input message for a validation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputMessage("Please enter a value greater than 10");
validation.SetShowInput(true);
worksheet.GetRange("B1").SetValue("Input message has been set");