// Read the error message shown when a cell's validation rule is violated in a spreadsheet.

// How do I find out what error message appears after an invalid entry in a spreadsheet?

// Retrieve the text displayed to users when they enter a value that fails validation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorMessage("Value must be greater than 10");
let errorMessage = validation.GetErrorMessage();
worksheet.GetRange("B1").SetValue("Error message: " + errorMessage);