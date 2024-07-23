// This example removes the table row.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
var oRow = oTable.GetRow(0);
oRow.GetCell(0).GetContent().GetElement(0).AddText("First row");
oRow.Remove();
oDocument.Push(oTable);
builder.SaveFile("docx", "Remove.docx");
builder.CloseFile();