// This example sets the background color to the table cell.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(4, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
var oCell = oTable.GetRow(0).GetCell(0);
oCell.SetBackgroundColor(255, 111, 61, false);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetBackgroundColor.docx");
builder.CloseFile();