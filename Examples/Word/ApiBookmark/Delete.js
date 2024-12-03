// This example shows how to delete bookmark from document.
let oDocument = Api.GetDocument(); 
let oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("ONLYOFFICE Document Builder"); 
let oRange1 = oDocument.GetRange(0, 11); 
oRange1.AddBookmark("Bookmark 1");
let oRange2 = oDocument.GetRange(14, 22); 
oRange2.AddBookmark("Bookmark 2");
let oBookmark1 = oDocument.GetBookmark("Bookmark 1");
oBookmark1.Delete();
oParagraph.AddLineBreak();
oParagraph.AddText(oBookmark1.GetName() + " is " + (oBookmark1.IsActive() ? "active" : "inactive"));
