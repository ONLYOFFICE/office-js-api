// This example specifies that when rendering the document using a paginated view, the contents of the paragraph are at least partly rendered on the same page as the following paragraph whenever possible.
var oDocument = Api.GetDocument();
var oMyStyle = oDocument.CreateStyle("My document style");
var oParaPr = oMyStyle.GetParaPr();
oParaPr.SetKeepNext(true);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is an example of how the paragraph tries to keep together with the next paragraph. ");
oParagraph.AddText("Scroll down to the second page to see it. ");
for (let x = 0; x < 5; ++x) {
	oParagraph = Api.CreateParagraph();
	for (let i = 0; i < 10; ++i) {
	oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
	}
	oParagraph.SetStyle(oMyStyle);
	oDocument.Push(oParagraph);
}
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The paragraph lines stay on the same page as the previous paragraph. ");
for (let i = 0; i < 10; ++i) {
	oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
oDocument.Push(oParagraph);