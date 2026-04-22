// Get all cells of a table as a two-dimensional array in a document.

// Creates a 3×3 table and retrieves all cells via the Cells property indexed by [row][cell].

// Each cell is accessed using row and column indices to add text content.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let cells = table.Cells;
for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
        cells[i][j].GetContent().AddText("R" + (i + 1) + "C" + (j + 1));
    }
}
