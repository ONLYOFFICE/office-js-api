// This example modifies a data validation rule for a range of cells.

// How to change data validation for a range of cells.

// Get a range from the worksheet and modify its data validation.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Data Validation for decimal to be more than 10 for A2 and A5");
const range = worksheet.GetRange("A2:A5");
const targetRange = worksheet.GetRange("A4:A5");
range.SetValue("10");
const validation = range.GetValidation();
validation.Add("xlValidateDecimal", "xlValidAlertWarning", "xlGreater", "12");
targetRange.GetValidation().Modify("xlValidateDecimal", "xlValidAlertStop", "xlLess", "12");
worksheet.GetRange("A6").SetValue("Data Validation is now modified for A4:A5, to accept values less than 12.");
