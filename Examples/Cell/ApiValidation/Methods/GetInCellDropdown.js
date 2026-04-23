// Check whether a validated cell shows a dropdown list for selecting values in a spreadsheet.

// How do I find out if a list validation rule displays a dropdown menu in a spreadsheet?

// Confirm whether users see a pick list when clicking on a cell with list-based validation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateList", null, null, "Apple,Banana,Cherry");
let hasDropdown = validation.GetInCellDropdown();
worksheet.GetRange("B1").SetValue("Has dropdown: " + hasDropdown);