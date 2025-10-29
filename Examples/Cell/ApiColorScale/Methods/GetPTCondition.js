// This example gets the pivot table condition of color scale formatting.

// How to retrieve pivot table condition object for color scale conditional formatting.

// Get color scale pivot table condition.

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
