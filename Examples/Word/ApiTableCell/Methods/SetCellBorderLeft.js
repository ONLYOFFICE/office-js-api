// This example sets the border which will be displayed to the left of the table cell.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("We create a 3x3 table and add the left 4 point black border to cell #1:");
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.SetCellBorderLeft("single", 32, 0, 51, 51, 51);
table.SetStyle(tableStyle);
document.Push(table);