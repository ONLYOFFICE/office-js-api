// This example makes the sheet active.
// How to set an active sheet.
// Set a current sheet active.
Api.AddSheet("New_sheet");
var oSheet = Api.GetSheet("New_sheet");
oSheet.SetActive();
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("The current sheet is active.");