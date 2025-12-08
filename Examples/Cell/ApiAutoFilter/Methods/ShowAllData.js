// This example clears the active filter and shows all rows in the AutoFilter range.

// How to temporarily show all data while keeping the filter drop-downs.

// Remove filter criteria using ApiAutoFilter.ShowAllData().

let worksheet = Api.GetActiveSheet();

// Prepare sample data
worksheet.GetRange("A1").SetValue("Amount");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(200);
worksheet.GetRange("A4").SetValue(50);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(40);

// Apply an AutoFilter that hides small values
let dataRange = worksheet.GetRange("A1:A6");
dataRange.SetAutoFilter(1, ">100", "xlOr");

let autoFilter = worksheet.AutoFilter;
worksheet.GetRange("C1").SetValue("FilterMode before ShowAllData:");
worksheet.GetRange("C2").SetValue(autoFilter.FilterMode);

// Now show all data (rows become visible, filter drop-down stays)
autoFilter.ShowAllData();

worksheet.GetRange("C4").SetValue("ShowAllData() called.");
worksheet.GetRange("C5").SetValue("Filter drop-down remains on header.");
worksheet.GetRange("C6").SetValue("All rows in the AutoFilter range are visible.");
