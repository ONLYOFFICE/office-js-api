// This example creates a new worksheet.
builder.CreateFile("xlsx");
var oSheet = Api.AddSheet("New sheet");
builder.SaveFile("xlsx", "AddSheet.xlsx");
builder.CloseFile();