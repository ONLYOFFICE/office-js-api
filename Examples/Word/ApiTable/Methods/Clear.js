// Erase all content from a table in a document.

// How do I wipe all the text and data out of a table in a document?

// Reset a table to empty by removing everything it contains in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
doc.Push(table);
table.Clear();
let paragraph = Api.CreateParagraph();
paragraph.AddText("The content of the table was cleared.");
doc.Push(paragraph);