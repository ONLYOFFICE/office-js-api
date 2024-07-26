// This example sets the border which will be displayed to the right of the table cell.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and add the right 4 point black border to cell #1:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oCell = oTable.GetRow(0).GetCell(0);
oCell.SetCellBorderRight("single", 32, 0, 51, 51, 51);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetCellBorderRight.docx");
builder.CloseFile();