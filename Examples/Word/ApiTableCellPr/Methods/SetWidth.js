// Set a fixed minimum width for a table cell in a document.

// How do I control how wide a cell appears in a document?

// Enforce a consistent cell size across all columns in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("All cells are at least 2 inches wide:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetWidth("twips", 2880);
table.SetStyle(tableStyle);
doc.Push(table);