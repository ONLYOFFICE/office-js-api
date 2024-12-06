// This example shows how to set bookmark text.
let oDocument = Api.GetDocument(); 
let oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("ONLYOFFICE Document Builder"); 
let oRange1 = oDocument.GetRange(0, 11);
oRange1.AddBookmark("BookmarkName");
let oBookmark = oDocument.GetBookmark("BookmarkName");
let sOldText = oBookmark.GetText();
oBookmark.SetText("New bookmark text");
oParagraph.AddLineBreak();
oParagraph.AddText("Bookmark text changed from: '" + sOldText + "' to: '" + oBookmark.GetText() + "'");
