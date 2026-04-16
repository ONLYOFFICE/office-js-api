// Get whether the input message is displayed in a spreadsheet.

// How to check if validation shows an input message in a spreadsheet.

// Get the ShowInput setting in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetShowInput(true);
let showInput = validation.GetShowInput();
worksheet.GetRange("B1").SetValue("Show input: " + showInput);