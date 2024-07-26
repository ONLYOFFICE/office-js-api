// This example replaces the current table with a paragraph.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTable = Api.CreateTable(3, 3);
oDocument.AddElement(0, oTable);
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
oTable.SetStyle(oTableStyle);
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The table was replaced with the current paragraph.");
oTable.ReplaceByElement(oParagraph);
builder.SaveFile("docx", "ReplaceByElement.docx");
builder.CloseFile();