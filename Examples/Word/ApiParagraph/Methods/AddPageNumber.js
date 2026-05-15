// Insert an automatic current-page number field into a paragraph in a document.

// How do I display the current page number inside a header or footer paragraph in a document?

// Place a dynamic page counter in a paragraph so each printed page shows its own number in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("First page");
paragraph.AddPageBreak();
paragraph.AddText("Second page");
paragraph.AddPageBreak();
paragraph.AddText("Third page");
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();