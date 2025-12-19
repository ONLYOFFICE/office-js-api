// This example gets whether the input message is displayed.

// How to check if validation shows an input message.

// Get the ShowInput setting.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetShowInput(true);
let showInput = validation.GetShowInput();
worksheet.GetRange("B1").SetValue("Show input: " + showInput);
