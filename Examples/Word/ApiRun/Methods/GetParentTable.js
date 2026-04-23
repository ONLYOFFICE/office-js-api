// Locate the table that holds a text run in a document.

// How do I find the table that a specific piece of text belongs to in a document?

// Navigate from a text run up to its parent table in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let paragraph = Api.CreateParagraph();
let run = Api.CreateRun();
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
let cell = table.GetCell(0, 0);
table.AddElement(cell, 0, paragraph);
let parentTable = run.GetParentTable();
cell = parentTable.GetRow(2).GetCell(0);
parentTable.RemoveRow(cell);