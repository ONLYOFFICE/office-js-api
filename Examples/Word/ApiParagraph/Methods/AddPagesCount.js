// This example inserts a number of pages in the current document into the paragraph.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("First page");
paragraph.AddPageBreak();
paragraph.AddText("Second page");
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("Page ");
paragraph.AddPageNumber();
paragraph.AddText(" of ");
paragraph.AddPagesCount();