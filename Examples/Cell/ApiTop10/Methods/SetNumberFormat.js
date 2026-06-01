// Apply a custom number format to cells matched by a top 10 rule in a spreadsheet.

// How do I display highlighted top values in a specific number format in a spreadsheet?

// Format the winning cells as currency when a top 10 condition is triggered in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.AddTop10();
condition1.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let formatBefore = condition1.GetNumberFormat();
condition1.SetNumberFormat("$#,##0.00");
let formatAfter = condition1.GetNumberFormat();

worksheet.GetRange("C1").SetValue("Format before: " + (formatBefore || "General"));
worksheet.GetRange("C2").SetValue("Format after: " + formatAfter);