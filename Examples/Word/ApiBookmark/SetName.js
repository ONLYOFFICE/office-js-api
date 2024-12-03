// This example shows how to set bookmark name.
let oDocument = Api.GetDocument(); 
let oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("ONLYOFFICE Document Builder"); 
let oRange1 = oDocument.GetRange(0, 11);
oRange1.AddBookmark("Bookmark_A");
let oBookmark = oDocument.GetBookmark("Bookmark_A");
let sOldName = oBookmark.GetName();
oBookmark.SetName("Bookmark_B");
oParagraph.AddLineBreak();
oParagraph.AddText("Bookmark name changed from: '" + sOldName + "' to: '" + oBookmark.GetName() + "'");
