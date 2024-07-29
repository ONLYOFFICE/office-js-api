// This example sets the bold property to the text character.
var oDocument = editor.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the font set to bold.");
oParagraph.SetBold(true);