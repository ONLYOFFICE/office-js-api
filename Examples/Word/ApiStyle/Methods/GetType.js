// Determine what kind of content a style is designed for in a document.

// How do I find out whether a style applies to tables, paragraphs, or characters in a document?

// Read and display the purpose category of a style in a document.

let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
tableStyle.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let tableStyleType = tableStyle.GetType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Style type = " + tableStyleType);