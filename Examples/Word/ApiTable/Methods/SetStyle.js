// This example sets a style to the table.

// How to set style of the table.

// Create a bordered table.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a table and apply one of the existing styles to it:");
let tableStyle = doc.GetStyle("Bordered");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);