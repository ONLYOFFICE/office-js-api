// Read the pivot table scope setting attached to a color scale rule in a spreadsheet.

// How do I check whether a color scale rule targets a specific part of a pivot table in a spreadsheet?

// Inspect the pivot table condition of a color scale rule and display whether one is set in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale();

let ptCondition = colorScale.GetPTCondition();

worksheet.GetRange("C1").SetValue("PT condition:");
worksheet.GetRange("C2").SetValue(ptCondition ? "Has condition" : "No condition");