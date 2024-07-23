// This example shows how to get the paragraph contents justification.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the text in it aligned by the center. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oParagraph.SetJc("center");
var sJc = oParagraph.GetJc();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Justification: " + sJc);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetJc.docx");
builder.CloseFile();