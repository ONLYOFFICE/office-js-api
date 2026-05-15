// Read the guidance message that appears when a user selects a validated cell in a spreadsheet.

// How do I find out what instruction text is shown when clicking on a cell with a validation rule in a spreadsheet?

// Retrieve the tooltip message displayed to guide users entering data into a restricted cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputMessage("Enter a number greater than 10");
let inputMessage = validation.GetInputMessage();
worksheet.GetRange("B1").SetValue("Input message: " + inputMessage);