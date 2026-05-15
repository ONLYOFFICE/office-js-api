// Read the lower boundary value used by a data bar rule in a spreadsheet.

// How do I find out the number or threshold at the bottom end of a data bar in a spreadsheet?

// Check what value marks the shortest bar to understand the data bar scale in a spreadsheet.

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

let minPointValue = dataBar.GetMinPointValue();

worksheet.GetRange("C1").SetValue("Min Point Value:");
worksheet.GetRange("C2").SetValue(minPointValue || "Auto");