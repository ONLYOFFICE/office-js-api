// This example specifies an amount of space which will be left between the right extent of the cell contents and the border of a specific table cell within a table.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.SetCellMarginRight(720);
cell.GetContent().GetElement(0).AddText("This is just a sample text to show that the right cell margin is 36 points.");
table.SetStyle(tableStyle);
doc.Push(table);