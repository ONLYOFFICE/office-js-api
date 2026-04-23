// Check whether the error alert is turned on for a validated cell in a spreadsheet.

// How do I find out if an error message appears when someone enters a wrong value in a spreadsheet?

// Confirm that invalid entries will trigger a visible warning in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetShowError(true);
let showError = validation.GetShowError();
worksheet.GetRange("B1").SetValue("Show error: " + showError);