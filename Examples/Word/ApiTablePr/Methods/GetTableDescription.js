// This example shows how to get the table description.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTablePr = oTableStyle.GetTablePr();
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTablePr.SetTableDescription("Empty table");
oTable.SetStyle(oTableStyle);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Table description: " + oTablePr.GetTableDescription());
oDocument.Push(oTable);
builder.SaveFile("docx", "GetTableDescription.docx");
builder.CloseFile();