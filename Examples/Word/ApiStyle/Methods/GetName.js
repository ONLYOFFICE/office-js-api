// Read the name assigned to a table style in a document.

// How do I find out what a table style is called in a document?

// Display the label attached to the active table style in a document.

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