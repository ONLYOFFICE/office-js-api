// Get a table of contents by its index from the document collection.

// Add a table of contents built from the document headings to the collection.

// Retrieve the first table of contents from the collection by its zero-based index.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let tablesOfContents = doc.GetTablesOfContents();
tablesOfContents.Add({"BuildFrom": {"OutlineLvls": 9}});
let toc = tablesOfContents.GetItem(0);
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Item class type: " + toc.GetClassType());
doc.Push(resultParagraph);
