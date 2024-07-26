// This example shows how to get a Range object that represents the part of the document contained in the specified table.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
var oRange = oTable.GetRange(0, 3);
oRange.SetBold(true);
builder.SaveFile("docx", "GetRange.docx");
builder.CloseFile();