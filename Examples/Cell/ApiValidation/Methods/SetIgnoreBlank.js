// This example sets whether blank values are permitted.

// How to allow or disallow blank values in validation.

// Set the IgnoreBlank setting.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetIgnoreBlank(false);
worksheet.GetRange("B1").SetValue("Blank values are not allowed");
