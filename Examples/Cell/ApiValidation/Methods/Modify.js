// Update the restriction rule on a group of cells without removing it first in a spreadsheet.

// How do I change the data rule that controls what values are allowed in selected cells in a spreadsheet?

// Replace an existing entry limit with new conditions so the affected cells enforce different criteria in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Data Validation for decimal to be more than 10 for A2 and A5");
const range = worksheet.GetRange("A2:A5");
const targetRange = worksheet.GetRange("A4:A5");
range.SetValue("10");
const validation = range.GetValidation();
validation.Add("xlValidateDecimal", "xlValidAlertWarning", "xlGreater", "12");
targetRange.GetValidation().Modify("xlValidateDecimal", "xlValidAlertStop", "xlLess", "12");
worksheet.GetRange("A6").SetValue("Data Validation is now modified for A4:A5, to accept values less than 12.");