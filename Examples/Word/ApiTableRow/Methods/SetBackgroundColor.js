// This example sets the background color to all cells in the table row.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(4, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
var oTableRow = oTable.GetRow(1);
oTableRow.SetBackgroundColor(255, 111, 61, false);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetBackgroundColor.docx");
builder.CloseFile();