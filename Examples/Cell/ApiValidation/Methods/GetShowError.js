// Get whether the error message is displayed in a spreadsheet.

// How to check if validation shows an error message in a spreadsheet.

// Get the ShowError setting in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetShowError(true);
let showError = validation.GetShowError();
worksheet.GetRange("B1").SetValue("Show error: " + showError);