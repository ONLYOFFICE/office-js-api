// This example shows how to get a table cell that contains the current paragraph.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text.");
var oCell = oTable.GetCell(0,0);
oTable.AddElement(oCell, 0, oParagraph);
var oParentTableCell = oParagraph.GetParentTableCell();
oParentTableCell.SetShd("clear", 255, 111, 61, false);
builder.SaveFile("docx", "GetParentTableCell.docx");
builder.CloseFile();