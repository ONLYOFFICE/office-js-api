// This example specifies an amount of space which will be left between the left extent of the cell contents and the border of a specific table cell within a table.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.SetCellMarginLeft(720);
cell.GetContent().GetElement(0).AddText("This is just a sample text to show that the left cell margin is 36 points.");
table.SetStyle(tableStyle);
document.Push(table);