// This example adds a data validation rule to a range of cells.

// How to apply data validation to a range of cells.

// Get a range from the worksheet and add data validation to it.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Data Validation for decimal to be more than 10");
const range = worksheet.GetRange("A2:A3");
range.SetValue("10");
const validation = worksheet.GetRange("A2").GetValidation();
validation.Add("xlValidateDecimal", "xlValidAlertWarning", "xlGreater", "12");
worksheet.GetRange("A4").SetValue("Data Validation is now applied for A2 only");
