// This example gets whether blank values are permitted.

// How to check if blank values are allowed in validation.

// Get the IgnoreBlank setting.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetIgnoreBlank(true);
let ignoreBlank = validation.GetIgnoreBlank();
worksheet.GetRange("B1").SetValue("Ignore blank: " + ignoreBlank);
