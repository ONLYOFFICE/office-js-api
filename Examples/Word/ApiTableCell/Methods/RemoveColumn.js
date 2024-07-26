// This example removes a column containing the cell.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
oTable.GetCell(0, 0).RemoveColumn();
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("A column with Cell 1 was removed.");
builder.SaveFile("docx", "RemoveColumn.docx");
builder.CloseFile();