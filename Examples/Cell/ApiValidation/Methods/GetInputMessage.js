// Get the input message text in a spreadsheet.

// How to retrieve the validation input message in a spreadsheet.

// Get the input message using the validation API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputMessage("Enter a number greater than 10");
let inputMessage = validation.GetInputMessage();
worksheet.GetRange("B1").SetValue("Input message: " + inputMessage);