// This example demonstrates setting the StopIfTrue property of a data bar formatting rule.

// How to control if a data bar stops evaluation of additional formatting rules.

// Set the StopIfTrue property of the data bar formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

let dataRange = worksheet.GetRange("A2:A3");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

dataBar.SetStopIfTrue(true);

let stopIfTrue = dataBar.GetStopIfTrue();

worksheet.GetRange("C1").SetValue("Stop if true:");
worksheet.GetRange("C2").SetValue(stopIfTrue);
