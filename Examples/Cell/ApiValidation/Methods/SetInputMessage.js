// Write the guidance text that appears when a user selects a cell with a validation rule in a spreadsheet.

// How do I add a helpful hint that shows up before someone types a value into a restricted cell in a spreadsheet?

// Guide users toward acceptable entries by displaying instructions when they click on a validated cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputMessage("Please enter a value greater than 10");
validation.SetShowInput(true);
worksheet.GetRange("B1").SetValue("Input message has been set");