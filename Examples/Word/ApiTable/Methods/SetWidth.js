// This example sets the preferred width to the table.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the table width to 100 percent:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);