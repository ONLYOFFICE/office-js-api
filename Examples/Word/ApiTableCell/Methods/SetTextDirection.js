// This example specifies the direction of the text flow for this table cell.

// Set the direction of the cell text.

// Get the cell from the table and set its direction.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 1440);
let cell = table.GetRow(0).GetCell(0);
cell.SetTextDirection("btlr");
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("btlr");
cell = table.GetRow(0).GetCell(1);
cell.SetTextDirection("tbrl");
paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("tbrl");
cell = table.GetRow(1).GetCell(0);
cell.SetTextDirection("lrtb");
paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("lrtb");
table.SetStyle(tableStyle);
doc.Push(table);