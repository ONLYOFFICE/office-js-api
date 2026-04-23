// Access the row that immediately follows a given row in a document.

// How do I move from one row to the row directly below it in a document?

// Navigate forward through table rows to reach the adjacent one in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
row.GetCell(0).GetContent().GetElement(0).AddText("First row");
row.GetNext().GetCell(0).GetContent().GetElement(0).AddText("Second row");
doc.Push(table);