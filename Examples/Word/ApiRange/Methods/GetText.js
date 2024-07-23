// This example shows how to get a text from the specified range.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("\tONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
var sText = oRange.GetText({"Numbering": true, "Math": true, "NewLineSeparator": "\r", "TabSymbol": "\t", "NewLineParagraph": true, "TableCellSeparator": "\t", "TableRowSeparator": "\r\n", "ParaSeparator": "\r\n"});
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The text of the specified range: " + sText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetText.docx");
builder.CloseFile();