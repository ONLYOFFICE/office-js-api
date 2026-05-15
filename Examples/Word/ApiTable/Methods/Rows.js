// Retrieve every row from a table in a document.

// How do I access all rows of a table at once in a document?

// Iterate over each row to fill cells with content in a document.

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
