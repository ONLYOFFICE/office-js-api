// This example removes a bookmark from the document.
var oDocument = Api.GetDocument(); 
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText( "ONLYOFFICE Document Builder "); 
var oRange = oDocument.GetRange(0, 9); 
oRange.AddBookmark( "Bookmark"); 
oDocument.DeleteBookmark("Bookmark");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The bookmark was removed from this document.");
oDocument.Push(oParagraph);