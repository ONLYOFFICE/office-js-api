// This example sets the border which will be displayed to the right of the table cell.

// How to add margin to the right of the cell.

// Create a 3x3 table and add the right cell margin.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add the right 4 point black border to all cells:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetCellBorderRight("single", 32, 0, 51, 51, 51);
table.SetStyle(tableStyle);
doc.Push(table);