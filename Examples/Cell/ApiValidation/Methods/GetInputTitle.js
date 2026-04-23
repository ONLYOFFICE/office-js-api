// Read the heading of the guidance tooltip shown when selecting a validated cell in a spreadsheet.

// How do I find out what title appears on the input prompt for a cell with a validation rule in a spreadsheet?

// Confirm the label used at the top of the input message box assigned to a restricted cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputTitle("Enter Value");
let inputTitle = validation.GetInputTitle();
worksheet.GetRange("B1").SetValue("Input title: " + inputTitle);