// This example sets whether the input message is displayed.

// How to show or hide the validation input message.

// Set the ShowInput setting.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputTitle("Input Title");
validation.SetInputMessage("Please enter a number greater than 10");
validation.SetShowInput(true);
worksheet.GetRange("B1").SetValue("Input message will be shown");
