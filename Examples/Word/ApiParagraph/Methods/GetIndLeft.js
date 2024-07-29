// This example shows how to get the paragraph left side indentation.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the indent of 2 inches set to it. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oParagraph.SetIndLeft(2880);
var nIndLeft = oParagraph.GetIndLeft();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Left indent: " + nIndLeft);
oDocument.Push(oParagraph);