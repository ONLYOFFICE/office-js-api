// Set whether a dropdown list is displayed in a spreadsheet.

// How to show or hide the validation dropdown list in a spreadsheet.

// Set the InCellDropdown setting.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateList", null, null, "Apple,Banana,Cherry");
validation.SetInCellDropdown(true);
worksheet.GetRange("B1").SetValue("Dropdown is enabled for A1");