// This example gets a class type and pastes it into the presentation.
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRowPr = tableStyle.GetTableRowPr();
table.SetStyle(tableStyle);
doc.Push(table);
let classType = tableRowPr.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);