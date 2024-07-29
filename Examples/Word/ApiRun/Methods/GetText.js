// This example returns a text from the text run.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("\tThis is a text run");
oParagraph.AddElement(oRun);
var sText = oRun.GetText({"NewLineSeparator": "\r", "TabSymbol": "\t"});
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The text of the specified run: " + sText);
oDocument.Push(oParagraph);