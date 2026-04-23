// Control whether leaving a validated cell empty is treated as an error in a spreadsheet.

// How do I make a cell's validation rule apply even when the cell is left blank in a spreadsheet?

// Require users to fill in a restricted cell rather than allowing them to skip it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetIgnoreBlank(false);
worksheet.GetRange("B1").SetValue("Blank values are not allowed");