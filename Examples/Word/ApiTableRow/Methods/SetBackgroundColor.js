// This example sets the background color to all cells in the table row.
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let tableRow = table.GetRow(1);
tableRow.SetBackgroundColor(255, 111, 61, false);
doc.Push(table);