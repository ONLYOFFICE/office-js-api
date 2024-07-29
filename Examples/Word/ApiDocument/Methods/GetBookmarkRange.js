// This example showh how to get a bookmark range.
var oDocument = Api.GetDocument(); 
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("ONLYOFFICE Document Builder"); 
var oRange = oDocument.GetRange(0, 9); 
oRange.AddBookmark("Bookmark"); 
oRange = oDocument.GetBookmarkRange("Bookmark");
oRange.SetBold(true);