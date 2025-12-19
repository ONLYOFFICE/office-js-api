// This example sets the validation alert style.

// How to change the validation alert style.

// Set the validation alert style.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetAlertStyle("xlValidAlertWarning");
let alertStyle = validation.GetAlertStyle();
worksheet.GetRange("B1").SetValue("New alert style: " + alertStyle);
