// Apply a predefined visual style to a table in a document.

// How do I give a table a consistent look and feel in a document?

// Dress up a table using one of the built-in formatting styles in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a table and apply one of the existing styles to it:");
let tableStyle = doc.GetStyle("Bordered");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);