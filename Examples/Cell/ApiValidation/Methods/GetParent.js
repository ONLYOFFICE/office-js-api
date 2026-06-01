// Identify the cell range that owns a given validation rule in a spreadsheet.

// How do I find out which cells a data validation rule belongs to in a spreadsheet?

// Trace back from a validation object to the range of cells it is applied to in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:A5");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let parent = validation.GetParent();
worksheet.GetRange("B1").SetValue("Parent range: " + parent.GetAddress());