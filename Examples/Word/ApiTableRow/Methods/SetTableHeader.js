// This example specifies that the current table row will be repeated at the top of each new page wherever this table is displayed.

// Rename the header of the table.

// How to set table row as a header.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x90 table and set row #1 as the table header:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 90);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetTableHeader(true);
let cell = tableRow.GetCell(0);
paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("Header cell #1");
cell = tableRow.GetCell(1);
paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("Header cell #2");
cell = tableRow.GetCell(2);
paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("Header cell #3");
table.SetStyle(tableStyle);
doc.Push(table);