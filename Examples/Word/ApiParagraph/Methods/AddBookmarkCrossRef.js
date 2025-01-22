// This example adds a bookmark cross-reference to the paragraph.
let doc = Api.GetDocument(); 
let paragraph = doc.GetElement(0); 
paragraph.AddText("ONLYOFFICE Document Builder"); 
let range = doc.GetRange(0, 9); 
range.AddBookmark("Bookmark");
let bookmarks = doc.GetAllBookmarksNames();
paragraph = Api.CreateParagraph();
paragraph.AddText("A bookmark was added ");
doc.Push(paragraph);
paragraph.AddBookmarkCrossRef("aboveBelow", bookmarks[0]);