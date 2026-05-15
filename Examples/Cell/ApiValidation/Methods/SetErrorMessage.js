// Assign the body text of the alert that appears when someone enters an invalid value in a spreadsheet.

// How do I write a custom explanation that pops up when a cell entry fails validation in a spreadsheet?

// Give users a clear reason why their input was rejected by defining the alert text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorMessage("The value must be greater than 10");
validation.SetShowError(true);
worksheet.GetRange("B1").SetValue("Error message has been set");