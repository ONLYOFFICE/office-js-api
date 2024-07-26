// This example specifies an amount of space which will be left between the right extent of the cell contents and the right border of all table cells within the parent table.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
var oCell = oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text to show that the right cell margin is 36 points.");
oTable.SetTableCellMarginRight(720);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTableCellMarginRight.docx");
builder.CloseFile();