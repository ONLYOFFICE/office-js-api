// This example makes the sheet active.
builder.CreateFile("xlsx");
Api.AddSheet("New_sheet");
var oSheet = Api.GetSheet("New_sheet");
oSheet.SetActive();
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("The current sheet is active.");
builder.SaveFile("xlsx", "SetActive.xlsx");
builder.CloseFile();