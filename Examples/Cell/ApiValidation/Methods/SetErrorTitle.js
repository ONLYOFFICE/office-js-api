// Assign the heading text of the alert dialog that appears for invalid cell entries in a spreadsheet.

// How do I set a custom title for the error popup that shows when validation fails in a spreadsheet?

// Label the error window with a meaningful heading so users immediately understand what went wrong in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorTitle("Invalid Input");
validation.SetShowError(true);
worksheet.GetRange("B1").SetValue("Error title has been set");