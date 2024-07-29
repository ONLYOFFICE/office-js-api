// This example shows how to get a number of elements in the current document.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Number of document elements at this point: ");
oParagraph.AddTabStop();
oParagraph.AddText("" + oDocument.GetElementsCount());
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Now we add one more paragraph and push it.");
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Number of document elements after we added the second paragraph ");
oParagraph.AddText("but before we push the third one: ");
oParagraph.AddTabStop();
oParagraph.AddText("" + oDocument.GetElementsCount());
oDocument.Push(oParagraph);