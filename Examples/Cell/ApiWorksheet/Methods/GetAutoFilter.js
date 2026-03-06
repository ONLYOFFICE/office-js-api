// This example gets the autofilter object for a worksheet.

// How to get the AutoFilter object of a worksheet.

// Get the AutoFilter object.

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
