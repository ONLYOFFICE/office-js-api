// This example sets the border which will be displayed at the bottom of the table.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We add the bottom 4 point black border:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
table.SetTableLook(true, true, true, true, true, true);
table.SetStyle(tableStyle);
doc.Push(table);