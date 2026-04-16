// Set whether blank values are permitted in a spreadsheet.

// How to allow or disallow blank values in validation in a spreadsheet.

// Set the IgnoreBlank setting in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetIgnoreBlank(false);
worksheet.GetRange("B1").SetValue("Blank values are not allowed");