// This example specifies an amount by which text is raised or lowered for this paragraph in relation to the default baseline of the surrounding non-positioned text.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text. ");
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This is a paragraph with the text lowered 15 points (30 half-points).");
oDocument.Push(oParagraph2);
oParagraph2.SetPosition(-30);
builder.SaveFile("docx", "SetPosition.docx");
builder.CloseFile();