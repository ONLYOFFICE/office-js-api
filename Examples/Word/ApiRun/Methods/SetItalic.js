// This example sets the italic property to the text character.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetItalic(true);
oRun.AddText("This is a text run with the font set to italicized letters.");
oParagraph.AddElement(oRun);