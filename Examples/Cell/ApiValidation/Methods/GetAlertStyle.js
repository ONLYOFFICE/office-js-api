// This example gets the validation alert style.

// How to retrieve the validation alert style.

// Get the validation alert style.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertWarning", "xlGreater", 10);
let alertStyle = validation.GetAlertStyle();
worksheet.GetRange("B1").SetValue("Alert style: " + alertStyle);
