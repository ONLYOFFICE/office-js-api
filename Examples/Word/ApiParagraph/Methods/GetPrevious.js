// This example shows how to get the previous paragraph.
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
oParagraph1.AddText("This is just a sample paragraph №1.");
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This is just a sample paragraph №2.");
oDocument.Push(oParagraph2);
var oPreviousParagraph = oParagraph2.GetPrevious();
oPreviousParagraph.SetBold(true);