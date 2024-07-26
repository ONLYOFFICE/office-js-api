// This example sSpecifies that when rendering the document using a page view, all lines of the current paragraph are maintained on a single page whenever possible.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is an example of how the paragraph tries to keep lines together. ");
oParagraph.AddText("Scroll down to the second page to see it.");
for (let x = 0; x < 5; ++x) {
	oParagraph = Api.CreateParagraph();
	for (let i = 0; i < 10; ++i) {
		oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
	}
	oDocument.Push(oParagraph);
}
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The paragraph lines are moved to the next page to keep them together. ");
for (let i = 0; i < 10; ++i) {
	oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
oParagraph.SetKeepLines(true);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetKeepLines.docx");
builder.CloseFile();