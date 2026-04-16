// Set the error message title in a spreadsheet.

// How to set the validation error title in a spreadsheet.

// Set error title for a validation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorTitle("Invalid Input");
validation.SetShowError(true);
worksheet.GetRange("B1").SetValue("Error title has been set");