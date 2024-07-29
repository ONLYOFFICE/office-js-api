// This example shows how to get an array with names of all bookmarks in the document.
var oDocument = Api.GetDocument(); 
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("ONLYOFFICE Document Builder"); 
var oRange1 = oDocument.GetRange(0, 9); 
oRange1.AddBookmark("Bookmark 1");
var oRange2 = oDocument.GetRange(11, 18); 
oRange2.AddBookmark("Bookmark 2");
var aBookmarks = oDocument.GetAllBookmarksNames();
oParagraph.AddLineBreak();
oParagraph.AddText("Bookmark names: ");
for (let i = 0; i < 2; i++ ){
	oParagraph.AddText(aBookmarks[i] + "," + " ");
}