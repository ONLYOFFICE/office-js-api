// This example specifies that any space before or after the paragraph.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with contextual spacing set to 'false'.");
oParagraph.SetContextualSpacing(false);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph with contextual spacing set to 'false'.");
oParagraph.SetContextualSpacing(false);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph with contextual spacing set to 'false'.");
oParagraph.SetContextualSpacing(false);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph with contextual spacing set to 'true'.");
oParagraph.SetContextualSpacing(true);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph with contextual spacing set to 'true'.");
oParagraph.SetContextualSpacing(true);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetContextualSpacing.docx");
builder.CloseFile();