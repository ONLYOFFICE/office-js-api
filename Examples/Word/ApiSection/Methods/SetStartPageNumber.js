// This example sets a custom start page index for section.

// How to set the start page number for the current section.

// Get a section from the paragraph and change its first page number to 2.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This section starts with second page number");
paragraph.AddPageBreak();
paragraph.AddText("Third page");
paragraph.AddPageBreak();
paragraph.AddText("Fourth page");
let section = paragraph.GetSection();
section.SetStartPageNumber(2);
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();