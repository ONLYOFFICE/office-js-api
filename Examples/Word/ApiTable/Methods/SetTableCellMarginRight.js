// This example specifies an amount of space which will be left between the right extent of the cell contents and the right border of all table cells within the parent table.

// How to set the right margin of the table cell.

// Resize the right margin of the cell.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text to show that the right cell margin is 36 points.");
table.SetTableCellMarginRight(720);
doc.Push(table);