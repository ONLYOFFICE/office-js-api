// This example specifies an amount of space which will be left between the left extent of the cell contents and the border of a specific table cell within a table.

// How to add margin to the left of the cell.

// Create a 3x3 table and add the left cell margin.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("This is just a sample text to show that the left margin for all the table cells is 36 points.");
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetCellMarginLeft(720);
table.SetStyle(tableStyle);
doc.Push(table);