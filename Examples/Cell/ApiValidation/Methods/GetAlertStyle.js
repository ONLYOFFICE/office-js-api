// Read the alert style set on a validation rule in a spreadsheet.

// How do I check what kind of alert appears when invalid data is entered in a spreadsheet?

// Inspect the warning type assigned to a cell's data validation rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertWarning", "xlGreater", 10);
let alertStyle = validation.GetAlertStyle();
worksheet.GetRange("B1").SetValue("Alert style: " + alertStyle);