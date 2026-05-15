// Access the font settings that a conditional formatting rule applies to matching cells in a spreadsheet.

// How do I retrieve the text style that a conditional formatting rule uses for highlighted cells in a spreadsheet?

// Inspect and adjust the font of a formatting condition to ensure consistent text styling in a spreadsheet.

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
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

let font = condition1.GetFont();
if (font) {
    font.SetBold(true);
    font.SetSize(14);
}

worksheet.GetRange("C1").SetValue("Font applied:");
worksheet.GetRange("C2").SetValue("Bold: " + (font ? font.Bold : "false"));
worksheet.GetRange("C3").SetValue("Size: " + (font ? font.Size : "default"));