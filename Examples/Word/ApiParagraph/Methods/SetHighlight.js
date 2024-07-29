// This example sets hiighlight color "lightGray" for the paragraph.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the text highlighted with light gray color.");
oParagraph.SetHighlight("lightGray");