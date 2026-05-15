// Assign a heading to the hint box that appears when a user selects a validated cell in a spreadsheet.

// How do I add a title to the tooltip that guides users when they click on a restricted cell in a spreadsheet?

// Name the input prompt so users know at a glance what kind of value a cell expects in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputTitle("Enter Value");
validation.SetShowInput(true);
worksheet.GetRange("B1").SetValue("Input title has been set");