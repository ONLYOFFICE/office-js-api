// This example sets a style to the table.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("We create a table and apply one of the existing styles to it:");
let tableStyle = document.GetStyle("Bordered");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
document.Push(table);