// This example sets the border which will be displayed at the top of the table cell.

// How to add border to the top of the cell.

// Create a 3x3 table and add the top 4 point black border to cell #1.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add the top 4 point black border to cell #1:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.SetCellBorderTop("single", 32, 0, 51, 51, 51);
table.SetStyle(tableStyle);
doc.Push(table);