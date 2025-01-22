// This example sets the background color to the table cell.
let document = Api.GetDocument();
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetRow(0).GetCell(0);
cell.SetBackgroundColor(255, 111, 61, false);
document.Push(table);