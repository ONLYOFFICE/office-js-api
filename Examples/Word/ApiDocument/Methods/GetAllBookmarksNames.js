// This example shows how to get an array with names of all bookmarks in the document.
let doc = Api.GetDocument(); 
let paragraph = doc.GetElement(0); 
paragraph.AddText("ONLYOFFICE Document Builder"); 
let range1 = doc.GetRange(0, 9); 
range1.AddBookmark("Bookmark 1");
let range2 = doc.GetRange(11, 18); 
range2.AddBookmark("Bookmark 2");
let bookmarks = doc.GetAllBookmarksNames();
paragraph.AddLineBreak();
paragraph.AddText("Bookmark names: ");
for (let i = 0; i < 2; i++ ){
	paragraph.AddText(bookmarks[i] + "," + " ");
}