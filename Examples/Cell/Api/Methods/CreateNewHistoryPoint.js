// This example creates a new history point.
// Add history point for a range.
// How to make a history point.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("This is just a sample text.");
Api.CreateNewHistoryPoint();
oWorksheet.GetRange("A3").SetValue("New history point was just created.");