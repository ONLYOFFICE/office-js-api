// Enable or disable the drop-down arrow that lets users pick from allowed values in a spreadsheet.

// How do I hide the selectable list of a cell that has a list-based validation rule in a spreadsheet?

// Let users type a valid value without a clickable menu of options in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateList", null, null, "Apple,Banana,Cherry");
validation.SetInCellDropdown(false);
worksheet.GetRange("B1").SetValue("Dropdown is disabled for A1");