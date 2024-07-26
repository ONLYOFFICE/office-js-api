// This example shows how to make search in table cell.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
var oRow = oTable.GetRow(0);
oRow.GetCell(0).GetContent().GetElement(0).AddText("text");
oRow.GetCell(1).GetContent().GetElement(0).AddText("text");
oRow.GetCell(2).GetContent().GetElement(0).AddText("text");
oDocument.Push(oTable);
var aRowSearch = oRow.Search("tex", true);
aRowSearch[1].SetBold("true");
builder.SaveFile("docx", "Search.docx");
builder.CloseFile();