// Retrieve the active auto filter from a worksheet in a spreadsheet.

// How do I access the auto filter applied to a sheet in a spreadsheet?

// Read the filtered range address by obtaining the worksheet's auto filter in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Cherry");
let range = worksheet.GetRange("A1:A4");
range.SetAutoFilter();
let autoFilter = worksheet.GetAutoFilter();
let filterRange = autoFilter.GetRange();
worksheet.GetRange("C1").SetValue("AutoFilter range:");
worksheet.GetRange("C2").SetValue(filterRange.GetAddress());