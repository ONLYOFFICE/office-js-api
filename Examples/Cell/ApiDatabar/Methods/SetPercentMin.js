// Set the shortest bar in a data bar rule to a minimum percentage of the column width in a spreadsheet.

// How do I ensure that even the smallest data bar is still visible inside a cell in a spreadsheet?

// Keep low-value bars from disappearing entirely by enforcing a lower percentage limit in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

worksheet.GetRange("C1").SetValue("Before:");
worksheet.GetRange("C2").SetValue(dataBar.GetPercentMin() + "%");

dataBar.SetPercentMin(10);

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(dataBar.GetPercentMin() + "%");