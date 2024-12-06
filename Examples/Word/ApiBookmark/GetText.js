// This example shows how to get bookmark text.
let oDocument = Api.GetDocument(); 
let oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("ONLYOFFICE Document Builder"); 
let oRange1 = oDocument.GetRange(0, 11); 
oRange1.AddBookmark("BookmarkName");
let oBookmark = oDocument.GetBookmark("BookmarkName");
oParagraph.AddLineBreak();
oParagraph.AddText("Bookmark text is: " + oBookmark.GetText());
