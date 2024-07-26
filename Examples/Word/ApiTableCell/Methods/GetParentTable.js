// This example shows how to get a parent table of the cell.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
var oParentTable = oTable.GetCell(0, 0).GetParentTable();
oParentTable.SetTableBorderTop("single", 32, 0, 51, 51, 51);
builder.SaveFile("docx", "GetParentTable.docx");
builder.CloseFile();