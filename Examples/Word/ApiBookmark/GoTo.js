// This example shows how to go to bookmark and select it.
let oDocument = Api.GetDocument(); 
let oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("ONLYOFFICE Document Builder"); 
let oRange1 = oDocument.GetRange(21, 28);
oRange1.AddBookmark("BookmarkName");
let oBookmark = oDocument.GetBookmark("BookmarkName");
oBookmark.GoTo();
