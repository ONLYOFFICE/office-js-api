// Return the collection of all tables of contents in the document.

// Build a heading and insert a table of contents into the document.

// Get the tables of contents collection and read how many it holds.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let tablesOfContents = doc.GetTablesOfContents();
tablesOfContents.Add({"BuildFrom": {"OutlineLvls": 9}});
let count = tablesOfContents.GetCount();