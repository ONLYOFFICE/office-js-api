// This example sets the border which will be displayed at the top of the table cell.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and add the top 4 point black border to all cells:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableCellPr = oTableStyle.GetTableCellPr();
oTableCellPr.SetCellBorderTop("single", 32, 0, 51, 51, 51);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetCellBorderTop.docx");
builder.CloseFile();