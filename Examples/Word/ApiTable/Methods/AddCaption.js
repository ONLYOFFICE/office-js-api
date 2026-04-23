// Insert a labeled caption below a table to identify it in a document.

// How do I add a numbered caption beneath a table so readers can reference it in a document?

// Attach a descriptive label with a sequence number to a table in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text in the first cell.");
let cell = table.GetCell(0, 0);
table.AddElement(cell, 0, paragraph);
table.AddCaption("", "Table", false, "Arabic", false, undefined, "hyphen");