// Check whether a data bar rule is linked to a pivot table condition in a spreadsheet.

// How do I find out if a data bar formatting rule is connected to a pivot table in a spreadsheet?

// Determine whether a conditional data bar targets a pivot table range in a spreadsheet.

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