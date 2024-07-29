// This example shows how to get the paragraph left side indentation.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetIndLeft(2880);
oParagraph.AddText("This is the first paragraph with the indent of 2 inches set to it. ");
oParagraph.AddText("This indent is set by the paragraph style. No paragraph inline style is applied. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
var nIndLeft = oParaPr.GetIndLeft();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Left indent: " + nIndLeft);
oDocument.Push(oParagraph);