// Set the lowest heading level included in a table of contents.

// Insert a table of contents built from the document headings.

// Limit the outline depth by ending the heading range at level 3.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
toc.SetLowerHeadingLevel(3);
