// This example gets whether a dropdown list is displayed.

// How to check if validation displays a dropdown list.

// Get the InCellDropdown setting.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateList", null, null, "Apple,Banana,Cherry");
let hasDropdown = validation.GetInCellDropdown();
worksheet.GetRange("B1").SetValue("Has dropdown: " + hasDropdown);
