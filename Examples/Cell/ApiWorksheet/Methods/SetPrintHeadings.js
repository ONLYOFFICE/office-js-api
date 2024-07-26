// This example specifies whether the current sheet row/column headers must be printed or not.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetPrintHeadings(true);
oWorksheet.GetRange("A1").SetValue("Row and column headings will be printed with this page: " + oWorksheet.GetPrintHeadings());
builder.SaveFile("xlsx", "SetPrintHeadings.xlsx");
builder.CloseFile();