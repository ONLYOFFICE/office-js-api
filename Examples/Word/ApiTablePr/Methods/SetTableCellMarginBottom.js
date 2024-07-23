// This example sSpecifies an amount of space which will be left between the bottom extent of the cell contents and the border of all table cells within the parent.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTablePr = oTableStyle.GetTablePr();
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTablePr.SetTableCellMarginBottom(720);
oTable.SetTableLook(true, true, true, true, false, false);
oTable.SetStyle(oTableStyle);
var oCell = oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text to show that the bottom cell margin is 36 points.");
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTableCellMarginBottom.docx");
builder.CloseFile();