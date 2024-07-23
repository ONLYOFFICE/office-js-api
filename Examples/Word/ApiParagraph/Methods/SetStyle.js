// This example sets a style for the paragraph.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNewDocumentStyle = oDocument.GetStyle("Heading 6");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
builder.SaveFile("docx", "SetStyle.docx");
builder.CloseFile();