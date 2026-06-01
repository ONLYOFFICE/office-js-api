// Retrieve every cell from a table as a grid in a document.

// How do I access all cells of a table by row and column in a document?

// Iterate over every row and column to read or fill each cell in a document.

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
