// This example adds conditional formatting to a range.

// How to add conditional formatting rules to highlight cells based on values.

// Add different types of conditional formatting to cells.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "200");
if (condition1) {
    condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));
}
