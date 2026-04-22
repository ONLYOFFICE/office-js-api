// Get all rows of a table in a document.

// Creates a 3×3 table, retrieves all rows via the Rows property, and adds text to the first cell of each row.

// Each row is accessed by index from the returned array.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let rows = table.Rows;
for (let i = 0; i < rows.length; i++) {
    rows[i].Cells[0].GetContent().AddText("Row " + (i + 1));
}
