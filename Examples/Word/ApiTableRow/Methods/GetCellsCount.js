// This example shows how to get a number of cells in the row.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableRow = oTable.GetRow(0);
var nCellsCount = oTableRow.GetCellsCount();
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Number of cells in the first row = " + nCellsCount);
builder.SaveFile("docx", "GetCellsCount.docx");
builder.CloseFile();