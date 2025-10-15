// This example demonstrates getting the pivot table condition object from a data bar formatting rule.

// How to retrieve the pivot table condition object of a data bar conditional formatting.

// Get the pivot table condition object of the data bar formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

let dataRange = worksheet.GetRange("A2:A3");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let ptCondition = dataBar.GetPTCondition();

worksheet.GetRange("C1").SetValue("PT Condition:");
worksheet.GetRange("C2").SetValue(ptCondition !== null ? "Available" : "Not available");
