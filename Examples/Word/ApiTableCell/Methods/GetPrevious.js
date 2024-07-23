// This example shows how to get the previous cell.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
oTable.GetCell(0, 1).GetContent().GetElement(0).AddText("Cell 2");
oDocument.Push(oTable);
var oPreviousCell = oTable.GetCell(0, 1).GetPrevious();
oPreviousCell.GetContent().GetElement(0).SetBold(true);
builder.SaveFile("docx", "GetPrevious.docx");
builder.CloseFile();