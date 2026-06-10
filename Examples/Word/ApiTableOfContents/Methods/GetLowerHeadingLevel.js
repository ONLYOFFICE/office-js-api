// Get the lowest heading level included in a table of contents.

// Insert a table of contents that spans the heading levels 1 through 3.

// Read the lower (innermost) heading level of the table of contents.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvlStart": 1, "OutlineLvls": 3}});
let lowerLevel = toc.GetLowerHeadingLevel();
