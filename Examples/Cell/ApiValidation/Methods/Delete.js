// Remove a data validation rule from a cell range in a spreadsheet.

// How do I clear an existing input restriction from a cell range in a spreadsheet?

// Lift a validation constraint so cells accept any value again in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Data Validation for decimals to be more than 10 for A2 and A3");
const range = worksheet.GetRange("A2:A3");
range.SetValue("10");
const validation = range.GetValidation();
validation.Add("xlValidateDecimal", "xlValidAlertWarning", "xlGreater", "12");
const targetedRange = worksheet.GetRange("A2");
targetedRange.GetValidation().Delete();
worksheet.GetRange("A4").SetValue("Data Validation is now removed for A2");