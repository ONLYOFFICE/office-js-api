// Add a border along the top edge of a table cell in a document.

// How do I draw a line at the top of a table cell in a document?

// Give a cell a visible top border to separate it from the row above in a document.

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