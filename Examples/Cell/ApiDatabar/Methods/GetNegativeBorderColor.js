// Read the border color used on bars that represent negative values in a spreadsheet.

// How do I find out what outline color is applied to negative data bars in a spreadsheet?

// Confirm the border shade assigned to bars displaying below-zero values in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(-50);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(-25);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let negativeBorderColor = dataBar.GetNegativeBorderColor();

worksheet.GetRange("C1").SetValue("Negative Border:");
worksheet.GetRange("C2").SetValue(negativeBorderColor ? "Set" : "None");