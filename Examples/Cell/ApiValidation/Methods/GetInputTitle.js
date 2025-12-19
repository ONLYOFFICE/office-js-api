// This example gets the input message title.

// How to retrieve the validation input title.

// Get the input title.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputTitle("Enter Value");
let inputTitle = validation.GetInputTitle();
worksheet.GetRange("B1").SetValue("Input title: " + inputTitle);
