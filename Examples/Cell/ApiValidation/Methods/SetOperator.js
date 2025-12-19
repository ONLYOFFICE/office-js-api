// This example sets the data validation operator.

// How to change the validation operator.

// Set the operator.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetOperator("xlLess");
let operator = validation.GetOperator();
worksheet.GetRange("B1").SetValue("New operator: " + operator);
