// Find the exact cells covered by the active filter drop-downs in a spreadsheet.

// How do I get the cell range that the current filter is applied to in a spreadsheet?

// Identify the full span of rows and columns under filter control so you can format or read them in a spreadsheet.

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