// This example specifies an amount of space which will be left between the upper extent of the cell contents and the border of a specific table cell within a table.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oCell = oTable.GetRow(0).GetCell(0);
oCell.SetCellMarginTop(720);
oCell.GetContent().GetElement(0).AddText("This is just a sample text to show that the top cell margin is 36 points.");
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetCellMarginTop.docx");
builder.CloseFile();