// This example deletes the table.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
oTable.Delete();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The table was removed from the document.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "Delete.docx");
builder.CloseFile();