// This example shows how to get a name of the current style.
let document = Api.GetDocument();
let tableStyle = document.GetStyle("Bordered");
tableStyle.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
document.Push(table);
let tableStyleName = tableStyle.GetName();
let paragraph = document.GetElement(0);
paragraph.AddText("Table style name = " + tableStyleName);