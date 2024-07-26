// This example creates two paragraphs. One with vertical aligment "subscript" and another one with vertical aligment "superscript".
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the text aligned below the baseline vertically.");
oParagraph.SetVertAlign("subscript");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph with the text aligned above the baseline vertically.");
oParagraph.SetVertAlign("superscript");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetVertAlign.docx");
builder.CloseFile();