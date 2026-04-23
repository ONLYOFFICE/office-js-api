// Attach a data validation rule to a cell range in a spreadsheet.

// How do I restrict what values a user can enter into a cell range in a spreadsheet?

// Enforce an input constraint on specific cells to prevent invalid entries in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Data Validation for decimal to be more than 10");
const range = worksheet.GetRange("A2:A3");
range.SetValue("10");
const validation = worksheet.GetRange("A2").GetValidation();
validation.Add("xlValidateDecimal", "xlValidAlertWarning", "xlGreater", "12");
worksheet.GetRange("A4").SetValue("Data Validation is now applied for A2 only");