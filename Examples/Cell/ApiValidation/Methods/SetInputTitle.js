// This example sets the input message title.

// How to set the validation input title.

// Set the input title.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputTitle("Enter Value");
validation.SetShowInput(true);
worksheet.GetRange("B1").SetValue("Input title has been set");
