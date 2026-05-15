// Add a border along the right edge of a table cell in a document.

// How do I draw a line on the right side of a table cell in a document?

// Give a cell a visible right border to separate it from the adjacent column in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add the right 4 point black border to cell #1:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.SetCellBorderRight("single", 32, 0, 51, 51, 51);
table.SetStyle(tableStyle);
doc.Push(table);