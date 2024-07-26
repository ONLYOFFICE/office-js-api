// This example shows how to get a cell by its position.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oCell = oTable.GetCell(0, 0);
oCell.GetContent().GetElement(0).AddText("Cell #1");
builder.SaveFile("docx", "GetCell.docx");
builder.CloseFile();