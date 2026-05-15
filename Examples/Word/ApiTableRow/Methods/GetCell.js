// Access a specific cell by its position within a table row in a document.

// How do I select a single cell from a row using its index in a document?

// Pinpoint one cell in a row by its numbered position to work with its content in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 1440);
let cell = tableRow.GetCell(1);
cell.SetVerticalAlign("bottom");
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("Align bottom");
table.SetStyle(tableStyle);
doc.Push(table);