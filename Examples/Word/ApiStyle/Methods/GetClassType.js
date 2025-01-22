// This example gets a class type and inserts it into the document.
let document = Api.GetDocument();
let tableStyle = document.GetStyle("Bordered");
tableStyle.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
document.Push(table);
let classType = tableStyle.GetClassType();
let paragraph = document.GetElement(0);
paragraph.AddText("Class Type = " + classType);