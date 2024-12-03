// This example shows how to get bookmark range.
let oDocument = Api.GetDocument(); 
let oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("ONLYOFFICE Document Builder"); 
let oRange1 = oDocument.GetRange(0, 11); 
oRange1.AddBookmark("Bookmark_ex");
let oBookmark = oDocument.GetBookmark("Bookmark_ex");
let oBookmarkRange = oBookmark.GetRange();
oBookmarkRange.SetBold(true);
oParagraph.AddLineBreak();
oParagraph.AddText("Bookmark range setted to bold");
