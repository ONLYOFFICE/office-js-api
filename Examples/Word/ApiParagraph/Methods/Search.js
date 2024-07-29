// This example shows how to make search in paragraph.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text. This text was added to the paragraph.");
var aSearch = oParagraph.Search("text");
aSearch[0].SetBold(true);