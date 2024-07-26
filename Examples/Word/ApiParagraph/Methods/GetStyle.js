// This example shows how to get the paragraph style method.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNewDocumentStyle = oDocument.GetStyle("Heading 6");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
var oStyle = oParagraph.GetStyle();
oParagraph.AddLineBreak();
oParagraph.AddText("Style: " + oStyle.GetName());
builder.SaveFile("docx", "GetStyle.docx");
builder.CloseFile();