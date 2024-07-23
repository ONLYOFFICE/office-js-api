// This example removes a table column with the specified cell.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and remove one column (the second one), so that it becomes 2x3:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
var oCell = oTable.GetRow(2).GetCell(1);
oTable.RemoveColumn(oCell);
oDocument.Push(oTable);
builder.SaveFile("docx", "RemoveColumn.docx");
builder.CloseFile();