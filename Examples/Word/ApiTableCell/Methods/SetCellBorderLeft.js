// Add a border along the left edge of a table cell in a document.

// How do I draw a line on the left side of a table cell in a document?

// Give a cell a visible left border to separate it from the column beside it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add the left 4 point black border to cell #1:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.SetCellBorderLeft("single", 32, 0, 51, 51, 51);
table.SetStyle(tableStyle);
doc.Push(table);