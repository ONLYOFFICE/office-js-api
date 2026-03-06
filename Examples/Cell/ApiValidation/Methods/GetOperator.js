// This example gets the data validation operator.

// How to retrieve the validation operator.

// Get the operator.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let operator = validation.GetOperator();
worksheet.GetRange("B1").SetValue("Operator: " + operator);
