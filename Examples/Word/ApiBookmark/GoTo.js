// This example shows how to go to bookmark and select it.
let oDocument = Api.GetDocument(); 
let oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("ONLYOFFICE Document Builder"); 
let oRange1 = oDocument.GetRange(0, 11);
oRange1.AddBookmark("Bookmark_ex");
let oBookmark = oDocument.GetBookmark("Bookmark_ex");
oBookmark.GoTo(true);
