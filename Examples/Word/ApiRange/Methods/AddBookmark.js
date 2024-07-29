// This example adds a bookmark to the specified range.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 9);
oRange.AddBookmark("Bookmark");
oParagraph.AddLineBreak();
oParagraph.AddText("A bookmark was added to the 'ONLYOFFICE' range.");