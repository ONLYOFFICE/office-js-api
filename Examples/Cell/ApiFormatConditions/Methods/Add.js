// Highlight cells automatically when their values meet a condition in a spreadsheet.

// How do I create a rule that colors cells based on whether they are above or below a threshold in a spreadsheet?

// Set up automatic cell formatting that reacts to the data entered in a spreadsheet.

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