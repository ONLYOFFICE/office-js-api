// This example specifies an amount of space which will be left between the top extent of the cell contents and the top border of all table cells within the parent table.

// How to set the top margin of the table cell.

// Resize the top margin of the cell.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text to show that the top cell margin is 36 points.");
table.SetTableCellMarginTop(720);
doc.Push(table);