// This example adds a bookmark cross-reference to the paragraph.
builder.CreateFile("docx");
var oDocument = Api.GetDocument(); 
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("ONLYOFFICE Document Builder"); 
var oRange = oDocument.GetRange(0, 9); 
oRange.AddBookmark("Bookmark");
var aBookmarks = oDocument.GetAllBookmarksNames();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("A bookmark was added ");
oDocument.Push(oParagraph);
oParagraph.AddBookmarkCrossRef("aboveBelow", aBookmarks[0]);
builder.SaveFile("docx", "AddBookmarkCrossRef.docx");
builder.CloseFile();