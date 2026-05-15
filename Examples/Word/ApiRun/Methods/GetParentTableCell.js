// Find the table cell that contains a text run in a document.

// How do I access the cell that holds a specific piece of text in a document?

// Navigate from a text run up to its enclosing table cell in a document.

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
let parentTableCell = run.GetParentTableCell();
parentTableCell.SetShd("clear", Api.HexColor('#FF6F3D'));