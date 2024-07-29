// This example removes an element using the position specified.
var oDocument = Api.GetDocument();
var oParagraph0 = oDocument.GetElement(0);
oParagraph0.AddText("This is paragraph #1.");
for (let nParaIncrease = 0; nParaIncrease < 4; ++nParaIncrease) {
	var oParagraph = Api.CreateParagraph();
	oParagraph.AddText("This is paragraph #" + (nParaIncrease + 2) + ".");
	oDocument.Push(oParagraph);
}
oDocument.RemoveElement(2);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("We removed paragraph #3, check that out above.");
oDocument.Push(oParagraph);