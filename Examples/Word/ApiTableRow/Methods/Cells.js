// Get all cells of a table row as an array in a document.

// Creates a 3×3 table, retrieves all cells of the first row via the Cells property.

// Each cell is accessed by index from the returned array to add text content.

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
