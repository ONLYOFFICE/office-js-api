// Read the title of the error dialog shown when a validation rule is broken in a spreadsheet.

// How do I find out what heading appears on the error popup for a validated cell in a spreadsheet?

// Confirm the caption used in the error alert box assigned to a cell's rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorTitle("Invalid Input");
let errorTitle = validation.GetErrorTitle();
worksheet.GetRange("B1").SetValue("Error title: " + errorTitle);