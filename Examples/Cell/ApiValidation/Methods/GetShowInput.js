// Check whether the input hint is turned on for a validated cell in a spreadsheet.

// How do I find out if a guidance message appears when someone selects a restricted cell in a spreadsheet?

// Confirm that a prompt will be shown to guide users before they enter a value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetShowInput(true);
let showInput = validation.GetShowInput();
worksheet.GetRange("B1").SetValue("Show input: " + showInput);