// Retrieve every cell in a table row as a list in a document.

// How do I access all the cells in a particular row at once in a document?

// Collect the full set of cells from a row so each one can be filled with content in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let row = table.GetRow(0);
let cells = row.Cells;
for (let i = 0; i < cells.length; i++) {
    cells[i].GetContent().AddText("C" + (i + 1));
}
