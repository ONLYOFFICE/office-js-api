// This example obtains the range to which an AutoFilter is applied.

// How to find the AutoFilter range and work with it as a normal ApiRange.

// Use ApiAutoFilter.GetRange() to get the filtered area.

let worksheet = Api.GetActiveSheet();

// Prepare a header and some data
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Quantity");

worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(10);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(20);
worksheet.GetRange("A4").SetValue("Bananas");
worksheet.GetRange("B4").SetValue(5);

// Apply an AutoFilter to A1:B4
let dataRange = worksheet.GetRange("A1:B4");
dataRange.SetAutoFilter(2, ">8", "xlAnd");

// Get the AutoFilter range
let autoFilter = worksheet.AutoFilter;
let filterRange = autoFilter.GetRange();    // or autoFilter.Range

worksheet.GetRange("D1").SetValue("AutoFilter range address:");
if (filterRange !== null) {
    worksheet.GetRange("D2").SetValue(filterRange.GetAddress());
    // Highlight the AutoFilter range
    filterRange.SetFillColor(Api.CreateColorFromRGB(255, 255, 204));
} else {
    worksheet.GetRange("D2").SetValue("No AutoFilter defined.");
}
