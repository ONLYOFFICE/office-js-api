// This example sets the background color to all cells in the table row.
let document = Api.GetDocument();
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let tableRow = table.GetRow(1);
tableRow.SetBackgroundColor(255, 111, 61, false);
document.Push(table);