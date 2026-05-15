// Access the row that immediately precedes a given row in a document.

// How do I move from one row to the row directly above it in a document?

// Navigate backward through table rows to reach the one before the current position in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(1);
row.GetCell(1).GetContent().GetElement(0).AddText("Second row");
row.GetPrevious().GetCell(1).GetContent().GetElement(0).AddText("First row");
doc.Push(table);