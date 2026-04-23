// Assign a custom name to an existing table style in a document.

// How do I rename a table style so it appears under a different label in a document?

// Give a built-in table style a new identifying name to distinguish it in a document.

let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
tableStyle.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let tableStyleName = tableStyle.GetName();
let paragraph = doc.GetElement(0);
paragraph.AddText("Table style name = " + tableStyleName);