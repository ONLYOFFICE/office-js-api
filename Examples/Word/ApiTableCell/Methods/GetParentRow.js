// This example shows how to get a parent row of the cell.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
var oParentRow = oTable.GetCell(0, 0).GetParentRow();
oParentRow.SetHeight("atLeast", 720);
builder.SaveFile("docx", "GetParentRow.docx");
builder.CloseFile();