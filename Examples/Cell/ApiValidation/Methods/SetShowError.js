// Turn the error alert on or off for a cell that has a validation rule in a spreadsheet.

// How do I make sure an error popup appears whenever someone enters a value that breaks a rule in a spreadsheet?

// Decide whether users see a warning when their input does not meet the required criteria in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorTitle("Error Title");
validation.SetErrorMessage("Invalid value entered");
validation.SetShowError(true);
worksheet.GetRange("B1").SetValue("Error message will be shown");