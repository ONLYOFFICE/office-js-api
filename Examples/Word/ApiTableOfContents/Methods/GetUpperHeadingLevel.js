// Get the highest heading level included in a table of contents.

// Insert a table of contents that spans the heading levels 2 through 4.

// Read the upper (outermost) heading level of the table of contents.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvlStart": 2, "OutlineLvls": 4}});
let upperLevel = toc.GetUpperHeadingLevel();
